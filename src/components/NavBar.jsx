import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-info mb-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Hungry Raptor</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Add Dish</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Remove Dish</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pending Orders</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Fulfilled Orders</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavBar