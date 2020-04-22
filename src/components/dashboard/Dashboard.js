import React from 'react';
import Currency from './currency/Currency'
import Accounts from './account/Accounts'
import './dashboard.css'
import Asan from './asan-creadit/asan';
import Stats from './stats/stats';
import Payment from './payments/payment';
import messageIcon from './message.svg'

const Dashboard = () => {
    return (
        <div >
            <h1 className="head">Dashboard</h1>
            <button className="service">
                Service order
            </button>
            <Currency className="currency"/>
            <Accounts className="accounts"/>
            <Asan />
            <Stats/>
            <Payment/>
            <img className="messageIcon" src={messageIcon}/>
        </div>
    )
}
export default Dashboard;