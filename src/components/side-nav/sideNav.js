import React from 'react';
import { Link } from 'react-router-dom';
import dash from './svg/dash.svg';
import exppos from './svg/exppos.svg';
import history from './svg/history.svg';
import payroll from './svg/payroll.svg';
import payment from './svg/payment.svg';
import products from './svg/products.svg';
import template from './svg/template.svg';
import './sideNav.css'

const Sidenav = () => {


    return (
        <div className="sidenav" style={{ top: '102px' }}>
            <ul>
                <li>
                   <Link to='/dashboard' >
                   <img src={dash} />
                    <h4>DashBoard</h4>
                   </Link>
                </li>
                <li>
                   <Link to="payment">
                   <img src={payment} />
                    <h4>Payment</h4>
                   </Link>
                </li>
                <li>
                    <a href=""><img src={payroll} /></a>
                    <h4>Payroll</h4>
                </li>
                <li>
                    <a href=""><img src={template} /></a>
                    <h4>Templates</h4>
                </li>
                <li>
                    <a href=""><img src={history} /></a>
                    <h4>History</h4>
                </li>
                <li>
                    <a href=""><img src={products} /></a>
                    <h4>Products</h4>
                </li>
                <li>
                    <a href=""><img src={exppos} /></a>
                    <h4>Express POS</h4>
                </li>

            </ul>
        </div>
    )
}

export default Sidenav;