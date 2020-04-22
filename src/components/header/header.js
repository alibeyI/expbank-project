import React from 'react'
import CustomizedInputBase from './input'
import logo from './svg/logo.svg';
import icon1 from './svg/icon1.svg';
import icon2 from './svg/icon2.svg';
import icon3 from './svg/icon3.svg';
import icon4 from './svg/icon4.svg';
import icon5 from './svg/icon5.svg';
import icon6 from './svg/icon6.svg';
import icon7 from './svg/icon7.svg';
import icon8 from './svg/icon8.svg';
import line from './svg/line.svg';

import './header.css'
const Header = () => {
    return (
        <div className="expHead">
            <img src={logo} alt="logo" className="logo" />
            <div className="searchIn">
                <CustomizedInputBase />
            </div>
            <div className="icons">
                <div>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={line} alt=""/>
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
                <img src={icon6} alt="" />
                <img src={icon7} alt="" />
                </div>
            </div>  
            <div className="loggerName">
                <strong>Alibey Ibrahimli</strong>
                <p>Apple INc</p>
            </div>
            <div className="logOutIcon">
                <div>
                <img src={icon8} alt="" />
                </div>
            </div>  
        </div>
    )
}

export default Header;