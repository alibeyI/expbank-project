import React from 'react'
import './pay.css'
import Datepick from './datepick';
import Lists from './lists';
const Payment = () => {
    return (
        <div className="payments">
            <h3 className="title1" >Payments and transfers</h3>
            <Datepick />
            <Lists/>
            <button className="button2">
                View all
            </button>
        </div>
    )
}
export default Payment;