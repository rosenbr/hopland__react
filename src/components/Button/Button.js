import React, {useState} from 'react';
import './Button.css';
import Popup from '../Popup/Popup';

const Button = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className="hop__main">
            <div className="hop__popup">
                <button onClick={() => setButtonPopup(true)}>Test button</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
            </div>
        </div>
    )
}

export default Button;