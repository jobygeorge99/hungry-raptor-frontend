import React,{useState} from 'react'
import NavBar from './NavBar'

const Login = () => {

    // const [input, setInput] = new useState(
    //     {
    //         email:""
    //         password:""
    //     }
    // )

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <center>

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Login</button>
                        </div>
                    </div>

                    </center>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Login