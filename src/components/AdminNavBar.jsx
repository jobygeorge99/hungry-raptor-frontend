import React,{ useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const AdminNavBar = () => {

  let navigate = useNavigate()

  const logOutAction = ()=>{
    sessionStorage.clear()
    navigate("/login")
  }

  useEffect(()=>{
    let userDataString = sessionStorage.getItem("userData")
    let userData = JSON.parse(userDataString);
    if (!userData || !userData.userId){
      navigate("/login")
    }
  },[])

  return (
    <nav className="navbar navbar-expand-lg bg-info mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href=".">Hungry Raptor</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Add Dish</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/removeDish">Remove Dish</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pendingOrders">Pending Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FulfilledOrders">Fulfilled Orders</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link logout-link" onClick={ logOutAction } > Log Out </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default AdminNavBar