import React from 'react';
import './Vendor.css';

const Vendor = (props) => {

    return (
        <div className='card' key={props.vendor.id}>
                <h3>{props.vendor.title}</h3>
                <h3>{props.vendor.hours}</h3>
                <h3>{props.vendor.phone}</h3>
                <h3>{props.vendor.blurb}</h3>
        </div>
    )
}

export default Vendor;