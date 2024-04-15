import React,{useEffect,useState} from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const FulfilledOrders = () => {

    const [data,setData] = new useState([])

    const getData = ()=>{
        axios.get("http://localhost:3001/api/admin/fulfilledOrders").then((response)=>{
            setData(response.data)
        })
    } 

    useEffect(()=>{ getData() }, [] )

  return (
    <div>
        <AdminNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <h3>Fulfilled Orders</h3>
                    <table class="table table-info">
                        <thead>
                            <tr>
                            <th scope="col">Sl.No.</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Dish & Count</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Order Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((value,index)=>{
                                    return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value[0].name}</td>
                                    <td>{value[0].details.map(detail => `${detail.dishName} (${detail.count})`).join(', ')}</td>
                                    <td>{value[0].date}</td>
                                    <td>{value[0].orderStatus}</td>
                                    </tr>
                                })
                            }
                            
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FulfilledOrders