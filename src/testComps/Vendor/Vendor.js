import React from "react";
import './Vendor.css';

function Vendor(props) {
    return(
        <div className="hop__vendor">
            <div className="vendor__info">
                {props.data.map(unitData => 
                <div>
                    <h3 key={unitData.id}>{unitData.title}</h3>
                    <h3 key={unitData.id}>{unitData.hours}</h3>
                </div>
                )}
            </div>
        </div>
    )
}

export default Vendor;