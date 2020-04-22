import React from 'react';
import ispol from './svg/ispol.svg';
import atk from './svg/atk.svg';
import napod from './svg/napod.svg';
import ovb from './svg/ovb.svg';
import './header.css';


 const Subheader = () => {
    return (
        <div className="subheader" >
            <img src={ispol}/>
            <img src={atk}/>
            <img src={napod}/>
            <img src={ovb}/>
        </div>
    )
}

export default Subheader;