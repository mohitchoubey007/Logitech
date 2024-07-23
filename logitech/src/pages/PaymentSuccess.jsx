import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")
    return (
       <div>
            

                <h2>ORDER SUCCESFULL</h2>

                <h2>
                    Reference No.{referenceNum}
                </h2>
                </div>
    )
}

export default PaymentSuccess