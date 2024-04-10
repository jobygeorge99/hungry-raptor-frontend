import React,{useState} from 'react'
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
        axios.post("http://localhost:3001/api/user/login",input).then((response)=>{
            console.log(response.data)
            if(response.data.status == "invalid username/password"){
                alert("Invalid Username or Password!")
                setInput(
                    {
                        email:"",
                        password:""
                    }
                )
            }else{
                console.log("line 35:",response.data._id)

                const session = {
                    "userId":response.data._id,
                    "name":response.data.name,
                    "role":response.data.role
                }
                const sessionString = JSON.stringify(session);
                sessionStorage.setItem('userData',sessionString)
                console.log(sessionStorage)
                if(response.data.role == "1"){
                    navigate("/")
                }else{
                    navigate("/viewMenu")
                }
                
            }
        })
    }

  return (
    <div>
        {/* <AdminNavBar/> */}
        <div className="container">

            <div className="row g-3 justify-content-center mt-5">
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        <div className="row g-3 text-center">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
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