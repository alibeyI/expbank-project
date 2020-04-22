import React from 'react'
import FormPayment from './form';
import './mkPay.css'
const Mkpayment = () => {
    return (
        <div>
            <h1 className="title">Dövlət Xəzinədarlıq Ödənişləri</h1>
            <div className="mkpayment">
                <FormPayment />
            </div>
        </div>
    )
}

export default Mkpayment;