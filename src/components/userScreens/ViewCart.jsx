import React,{ useEffect,useState } from 'react'
import UserNavBar from './UserNavBar'
import axios from 'axios'

const ViewCart = () => {

  const [data,setData] = new useState([])
  const [totalAmount, setTotalAmount] = useState(0);
  const userDataString = sessionStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  let userId = { "userId":userData.userId }
  console.log(userId)


  const getData = ()=>{
      axios.post("http://localhost:3001/api/user/getMyCart",userId).then((response)=>{
          setData(response.data)
          setTotalAmount(0); // Reset totalAmount
          findAmount(response.data);
      })
  }

  const findAmount = (data) => {
    let amount = 0;
    for (const item of data) {
      amount += parseInt(item.dishId.price);
    }
    setTotalAmount(amount); // Update totalAmount using useState
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
                            <div className="card">
                              <img src={value.dishId.image} style={{ width: '200px', height: '200px' }} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                <h5 className="card-title">Name: {value.dishId.name}</h5>
                                <p className="card-text">Price: {value.dishId.price}</p>
                                <p className="card-text">Count: {value.count}</p>
                                <div className="btn btn-danger d-flex justify-content-center" > Remove from Cart </div>
                              </div>
                            </div>
                          </div>
                })
              }
            </div>

            <div className="row g-3 mt-2">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex d-flex justify-content-center">
               Total Amount : { totalAmount }
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex d-flex justify-content-center">
               <div className="btn btn-success">Make Payment</div> 
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex d-flex justify-content-center">
               
              </div>
            </div>

          </div>
        </div>
      </div>  

    </div>
  )
}

export default ViewCart