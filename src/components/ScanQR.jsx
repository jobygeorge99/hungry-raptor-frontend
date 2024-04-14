import React,{ useState } from 'react'
import AdminNavBar from './AdminNavBar'
import { useZxing } from "react-zxing"

const ScanQR = () => {

    const [result, setResult] = useState("");
    const { ref } = useZxing({
      onDecodeResult(result) {
        setResult(result.getText());
        console.log(result)
      },
    });

  return (
    <div>
        
        <AdminNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                <>
                <video ref={ref} />
                <p>
                    <span>Last result:</span>
                    <span>{result}</span>
                </p>
                </>                  

                </div>
            </div>
        </div>

    </div>
  )
}

export default ScanQR