import React, {useState} from "react";
import './ListItems.css';
import Button from "../Button/Button";
// import Vendor from "../Vendor/Vendor";

function ListItems () {
    
    const [dataList, setData] = useState([
        {id: 1, title: 'Vendor 1', hours: 'M-F, 9 to 5'},
        {id: 2, title: 'Vendor 2', hours: 'Sun-Sat, 8 to 6'},
        {id: 3, title: 'Vendor 3', hours: 'Sun-Sat, 8 to 6'}
    ])
    
    return(
        dataList.map((data) => (
        <div className="card" key={data.id}>
            <h3>LI comp</h3>
            {/* <ul>
                {venInfo.map((ven) => <Button title={ven.title} hours={ven.hours} key={ven.id}/>)}
            </ul> */}
            {/* <Button title={venInfo.title} hours={venInfo.hours} id={venInfo.id}/> */}
            {/* <Vendor data={data} /> */}
            <Button />
        </div>
        ))
    )
}

export default ListItems;