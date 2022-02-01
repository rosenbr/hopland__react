import './Popup.css';
import Vendor from '../Vendor/Vendor';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup__inner">
                <button className="close__button" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
                <Vendor />
            </div>
        </div>
    ) : "";
};

export default Popup;