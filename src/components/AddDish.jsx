import React,{ useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'


const AddDish = () => {

    const [input,setInput] = new useState(
        {
            "name":"",
            "image":"",
            "count":"",
            "price":""
        }
    )

    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/admin/addDish",input).then((response)=>{
            console.log(response.data)
            if(response.data.status == "success"){
                alert("Successfully Added")
                setInput(
                    {
                        "name":"",
                        "image":"",
                        "count":"",
                        "price":""
                    }
                )
            }else{
                alert("Something went wrong!")
            }
        })
    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <form-label htmlFor="" className="form-label">Name of Dish</form-label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <form-label htmlFor="" className="form-label">Image URL</form-label>
                            <input type="text" className="form-control" name='image' value={input.image} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <form-label htmlFor="" className="form-label">No. of plates</form-label>
                            <input type="text" className="form-control" name='count' value={input.count} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <form-label htmlFor="" className="form-label">Price</form-label>
                            <input type="text" className="form-control" name='price' value={input.price} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValues} >Submit</button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default AddDish