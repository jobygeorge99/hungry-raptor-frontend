import React,{useState,useEffect} from 'react'
import UserNavBar from './UserNavBar'
import axios from 'axios'
import QRModal from './QRModal'

const ViewMyOrders = () => {

    const [txnId, setTxnId] = useState('');

    const [data,setData] = new useState([])

    const userDataString = sessionStorage.getItem('userData');
    const userData = JSON.parse(userDataString);

    const userId = {"userId":userData.userId}
    const getData = ()=>{
        axios.post("http://localhost:3001/api/user/view_my_orders",userId).then((response)=>{
        console.log(response.data)    
        setData(response.data)
        })
    } 

    const parentToChild = (value) => {
        setTxnId(value);
    }

    useEffect(()=>{ getData() }, [] )


  return (
    <div>
        <UserNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <h3>My Orders:</h3>
                    <table className="table table-info">
                        <thead>
                            <tr>
                            <th scope="col">Sl.No.</th>
                            <th scope="col">TransactionId</th>
                            <th scope="col">Dish & Count</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">QR</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((value,index)=>{
                                    return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value[0].transactionId}</td>
                                    <td>{value[0].details.map(detail => `${detail.dishName} (${detail.count})`).join(', ')}</td>
                                    <td>{value[0].date}</td>
                                    <td>{value[0].orderStatus}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ ()=>parentToChild(value[0].transactionId) } >
                                        View QR
                                        </button>
                                        <QRModal parentToChild={txnId} />
                                    </td>
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

export default ViewMyOrders