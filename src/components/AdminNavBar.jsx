import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const AdminNavBar = () => {

  let navigate = useNavigate()

  const logOutAction = ()=>{
    sessionStorage.clear()
    navigate("/")
  }

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
              <span className="nav-link" onClick={ logOutAction } >Log Out</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default AdminNavBar

// <div>
// <nav className="navbarAdminNavBar-expand-lg bg-info mb-3">
// <div className="container-fluid">
//     <Link className="navbar-brand" to="/">Hungry Raptor</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapseAdminNavBar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//         <li className="nav-item">
//         <Link className="nav-link active" aria-current="page" to="/">Add Dish</Link>
//         </li>
//         <li className="nav-item">
//         <Link className="nav-link" to="/removeDish">Remove Dish</Link>
//         </li>
//         <li className="nav-item">
//         <Link className="nav-link" to="pendingOrders">Pending Orders</Link>
//         </li>
//         <li className="nav-item">
//         <Link className="nav-link" to="FulfilledOrders">Fulfilled Orders</Link>
//         </li>
//         <li className="nav-item">
//         <a className="nav-link" href="#">Login</a>
//         </li>
//         {/* <li className="nav-item">
//         <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li> */}
//     </ul>
//     </div>
// </div>
// </nav>
// </div>