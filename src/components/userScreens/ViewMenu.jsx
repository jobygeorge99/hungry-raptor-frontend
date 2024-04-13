import React,{ useEffect,useState } from 'react'
import UserNavBar from './UserNavBar'
import axios from 'axios'
import QuantityPicker from '../quantitySelector/QuantityPicker'

const ViewMenu = () => {

  const [data,setData] = new useState([])

  const getData = ()=>{
      axios.get("http://localhost:3001/api/user/viewMenu").then((response)=>{
          setData(response.data)
          console.log(response.data)
      })
  }

  let quantityArray = {}

  const appendToQuantity = (dishId, quantity) => {
    console.log(`Item ID: ${dishId}, Quantity: ${quantity}`);
    quantityArray[dishId] = quantity
  };

  const  addToCart= (dishId,dishName) => {
    console.log(quantityArray)
    const userDataString = sessionStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    let id = userData.userId

    let dishDetails = { 
      "userId":id,
      "dishId":dishId,
      "dishName":dishName,
      "count":quantityArray[dishId]
     }
    console.log(dishDetails)
    axios.post("http://localhost:3001/api/user/addToCart",dishDetails).then((response)=>{
      if(response.data.status == "success"){
        alert("Added to Cart")
      }else{
          alert("Something went wrong!")
      }
    })
    
  };

  useEffect(()=>{getData()},[])

  return (
    <div>
        <UserNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                      {
                        data.map((value,index)=>{
                          return <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex">
                                    <div class="card">
                                      <img src={value.image} style={{ width: '200px', height: '200px' }} class="card-img-top" alt="..."/>
                                      <div class="card-body">
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">Price: {value.price}</p>
                                        <div className="div mb-2"> <QuantityPicker min={0} max={10} onQuantityChange={(quantity) => appendToQuantity(value._id, quantity)} /> </div>
                                        <div className="btn btn-primary d-flex justify-content-center" onClick={() => addToCart(value._id,value.name)} > Add to Cart </div>
                                      </div>
                                    </div>
                                  </div>
                        })
                      }
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMenu