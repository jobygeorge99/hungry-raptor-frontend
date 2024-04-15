import React from 'react'
import { Link } from 'react-router-dom'

const LoginNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-info mb-3">
          <div className="container-fluid">
            <Link className="navbar-brand" href=".">Hungry Raptor</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                
              </ul>
            </div>
          </div>
        </nav>
    
      )
}

export default LoginNavBar