import React from 'react';
import './Popup.css';
import Vendor from '../Vendor/Vendor';

function Popup(props) {

        return (props.trigger) ? (
            <div className="popup">
                <div className="popup__inner">
                    <button className="close__button" onClick={() => props.setTrigger(false)}>X</button>
                    {props.children}
                    <Vendor
                    // name={this.state.name}
                    // phone={this.state.phone}
                    // hours={this.state.hours}
                    // blurb={this.state.blurb}
                    />
                </div>
            </div>
        ) : "";
};

export default Popup;