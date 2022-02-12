import React, {useState} from 'react';
import './Popup.css';
import Vendor from '../Vendor/Vendor';

const Popup = (props) => {

    const [data, setData] = useState([
        {id: 1, title: 'Vendor 1', hours: 'M-F, 9 to 5'},
        {id: 2, title: 'Vendor 2', hours: 'Sun-Sat, 8 to 6'},
        {id: 3, title: 'Vendor 3', hours: 'Sun-Sat, 8 to 6'}
    ])

        return (props.trigger) ? (
            <div className="popup">
                <div className="popup__inner">
                    <button className="close__button" onClick={() => props.setTrigger(false)}>X</button>
                    {props.children}
                    <Vendor data={data}/>
                </div>
            </div>
        ) : "";
};


export default Popup;