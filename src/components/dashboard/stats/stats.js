import React from 'react'
import DatePickers from './date'
import stat from './stat.svg'
import './stats.css'
const Stats = () => {
    return (
        <div className="stats" >
            <h2 className="head2" >Stats</h2>
            <label className="dropdown">
                <div className="dd-button">
                    My Account 12312312231231031023013
                    </div>
                <input type="checkbox" className="dd-input" id="test"/>

                    <ul className="dd-menu">
                        <li>12312312231231031023013</li>
                        <li>Another action</li>
                        <li>Something else here</li>
                    </ul>
                </label>
                <div className="date">
                    <DatePickers/>
                </div>
                <img src={stat} className="statimg"/>
        </div>
    )
}

export default Stats;