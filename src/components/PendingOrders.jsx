import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const PendingOrders = () => {

    //const [data,setData] = new useState([])
    //let id = 
    // const getDate = axios.post("http://localhost:3001/api/user/view_my_orders",id).then((response)=>{
    //     setData(response.data)
    // })

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col">

                    <h3>Pending Orders</h3>
                    <table class="table table-info">
                        <thead>
                            <tr>
                            <th scope="col">Sl.No.</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Dish</th>
                            <th scope="col">Count</th>
                            <th scope="col">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PendingOrders