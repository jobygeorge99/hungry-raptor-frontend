import React,{useState} from 'react'
import NavBar from './NavBar'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate()

    const [input, setInput] = new useState(
        {
            email:"",
            password:""
        }
    )

    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues = ()=>{

        console.log(input)
        axios.post("",input).then((response)=>{
            console.log(response.data)
            if(response.data.sttus == "invalid"){
                alert("Invalid Username or Password!")
                setInput(
                    {
                        email:"",
                        password:""
                    }
                )
            }else{
                console.log(response.data.userData._id)
                sessionStorage.setItem("userId",response.data.userData._id)
                navigate("/")
            }
        })
    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3 justify-content-center mt-5">
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        <div className="row g-3 text-center">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='name' value={input.name} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="text" className="form-control" name='password' value={input.password} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>Login</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <Link to="/signup">New User ? Click Here.</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Login