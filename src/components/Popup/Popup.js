import React from 'react';
import './Popup.css';
import Vendor from '../Vendor/Vendor';

class Popup extends React.Component {


    data = {
        name: 'Nelson Family',
        hours: 'Sun-Sat: 10AM-5PM',
        phone: '(707)462-3755',
        blurb: 'Loreum Ipsum',
        reservations: 'Yes',
        directions: 'tee hee',
        _id: "qpslcmfhep"
    }
    // state = {
    //     name: "",
    //     hours: "",
    //     phone: "",
    //     blurb: "",
    //     reservations: "",
    //     directions: "",
    //     // _id: "",
    //     // pic: ""
    // }

    handleClick = () => {
        this.setState({send:true})
    }

    render(props){

        return (props.trigger) ? (
            <div className="popup">
                <div className="popup__inner">
                    <button className="close__button" onClick={() => props.setTrigger(false)}>X</button>
                    {props.children}
                    <Vendor
                    name={this.state.name}
                    phone={this.state.phone}
                    hours={this.state.hours}
                    blurb={this.state.blurb}
                    />
                </div>
            </div>
        ) : "";
    }
};

export default Popup;