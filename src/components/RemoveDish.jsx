import React,{useState,useEffect} from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const RemoveDish = () => {

    const [data,setData] = new useState([])

    const getData = ()=>{
        axios.get("http://localhost:3001/api/admin/viewOrders").then((response)=>{
            setData(response.data)
        })
    }

    useEffect(()=>{getData()},[])

    const deleteData = (id)=>{
        console.log(id)
        let data = { "_id": id }
        axios.post("http://localhost:3001/api/admin/removeDish",data).then((response)=>{
            console.log(response.data)
            if(response.data.status == "success"){
                getData()
                alert("Successfully removed")
            }else{
                alert("Something went wrong!")
            }
        })
    }

  return (
    <div>
        <AdminNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">

                    <div className="row g-3">
                    {
                        data.map((value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card">
                                            <img height="350px" width="350px" src={value.image} className="card-img-top" alt="Image Missing!"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.name}</h5>
                                                <p className="card-text">Price: {value.price}</p>
                                                <button className="btn btn-danger" onClick={() => deleteData(value._id)}>Remove</button>
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

export default RemoveDish