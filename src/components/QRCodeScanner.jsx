import React,{useEffect, useState} from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const QRCodeScanner = () => {

    const [scanResult,setScanResult] = useState(null)

    useEffect(()=>{

        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width:250,
                height:250.
            },
            fps:5,
        })
    
        scanner.render(success,error)
    
        function success(result){
            scanner.clear()
            setScanResult(result)
            console.log(result)
            let str = {
                "transactionId":result
            }
            axios.post("http://localhost:3001/api/admin/serveFood",str).then((response)=>{
                if(response){
                    alert("Successfully served")
                }
            })
        }
    
        function error(err){
            console.warn(err)
            console.log("error")
        }

    },[])



  return (
    <div>
        <AdminNavBar/>
        <h4>QR Code Scanning</h4>
        {
            scanResult
            ? <div> Success: {scanResult} </div>
            : <div id='reader'></div> 
        }
    </div>
  )
}

export default QRCodeScanner