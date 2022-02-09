import React from 'react';
import './Vendor.css';

const Vendor = () => {

    // let vendorData = {vendors}

    // return (
    //         <div className="hop__vendor">
    //             <div className="vendor__info">
    //                 {vendorData}
    //                 <h3 className="vendor__info">{vendorData.name}</h3>
    //                 {/* <h3 className="vendor__info">{vendor.hours}</h3> */}
    //                 {/* <h3 className="vendor__info">{vendor.phone}</h3> */}
    //                 {/* <h3 className="vendor__info">{vendor.blurb}</h3> */}
    //             </div>
    //         </div>
    // )

    // === | Test data set and return | ===
        const data = 
            {
                id: 1,
                name: "Nelson",
                phone: "(555)555-5555",
                hours: "M-F, 9 AM to 5 PM",
                blurb: "Dummy blurb text"
            }

        return (
            <div className="hop__vendor">
                <h3 className="vendor__pic">Pic</h3>
                <div className="vendor__info">
                    <h3 className="vendor__info">{data.name}</h3>
                    <h3 className="vendor__info">{data.hours}</h3>
                    <h3 className="vendor__info">{data.phone}</h3>
                    <h3 className="vendor__blurb">{data.blurb}</h3>
                </div>
            </div>
    )
}

export default Vendor;