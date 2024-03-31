import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const RemoveDish = () => {

    const [data,setData] = new useState([])

    const getData = ()=>{
        axios.get("http://localhost:3001/api/admin/viewOrders").then((response)=>{
            setData(response.data)
        })
    }

    useEffect(()=>{getData()},[])

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">

                    <div className="row g-3">
                    {
                        data.map((value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card">
                                            <img height="350px" width="350px" src={value.image} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.name}</h5>
                                                <p className="card-text">Price: {value.price}</p>
                                                <a href="#" className="btn btn-danger">Remove</a>
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