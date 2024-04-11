import React,{useState} from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const navigate = useNavigate()

    const [input, setInput] = new useState(
        {
            "name":"",
            "email_id":"",
            "password":"",
            "role":""
        }
    )

    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const sendValues = () =>{

        console.log(input)
        axios.post("http://localhost:3001/api/user/signup",input).then((response)=>{
        console.log(response.data)

            if(response.data.status === "success"){

                alert("Registered successfully")
                navigate("/addDish")
            }
            else {
                
                alert("Something went wrong ...")
                setInput({
                    "name":"",
                    "email_id":"",
                    "password":"",
                    "role":""
                })
            }

        })
    }

  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EmailId</label>
                            <input type="text" className="form-control" name='email_id' value={input.email_id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>

                        {/* confirm password Incomplete */}
                        {/* <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name='confirmPassword' onChange={inputHandler} />
                        </div> */}
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={sendValues}>Sign Up</button>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp