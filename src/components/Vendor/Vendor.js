// import Card from '../Card/Card';
import React from 'react';
import './Vendor.css';

function Vendor({ name, hours, phone, blurb }) {

    // === | Real data set and return | ===
    // const vendor = [
    //     {
    //         id: 1,
    //         name: 'Nelson Family',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)462-3755',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Yes',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 2,
    //         name: 'Jaxon Keys',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)462-6666',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 3,
    //         name: 'Saracina',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)670-0199',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 4,
    //         name: 'Golden Pig',
    //         hours: 'Sun-Sat: 11AM-5PM',
    //         phone: '(707)670-6055',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 5,
    //         name: 'Golden Pig Wine Shop',
    //         hours: 'Sun-Sat: 11AM-5PM',
    //         phone: '(707)744-8375',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 6,
    //         name: 'McNab Ridge',
    //         hours: 'Mon-Fri: 9AM-5PM',
    //         phone: '(707)462-2423',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 7,
    //         name: 'Brutocao',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)744-1066',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 8,
    //         name: 'Cesar Toxqui',
    //         hours: 'Sat & Sun: 12:30PM-5PM',
    //         phone: '(707)391-8411',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 9,
    //         name: 'Terra Savia',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)744-1114',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 10,
    //         name: 'Alta Orsa',
    //         hours: 'Mon-Fri: 8AM-4:30PM',
    //         phone: '(707)540-4311',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 11,
    //         name: 'Graziano',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)744-8466',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 12,
    //         name: 'McFadden',
    //         hours: 'Mon-Fri: 9AM-4PM',
    //         phone: '(800)544-8230',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 13,
    //         name: 'Hopland Tap',
    //         hours: 'Wed-Sun: 12PM-8PM',
    //         phone: '(707)510-9000',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     },
    //     {
    //         id: 14,
    //         name: 'Stockfarm & Campovida',
    //         hours: 'Fri-Sun: 11AM-4PM',
    //         phone: '(707)744-1977',
    //         blurb: 'Loreum Ipsum'
    //         // reservations: 'Y/N?',
    //         // directions: 'tee hee',
    //     }
    // ]
    
    // return (
    //     vendor.map((vendor) => {
    //         <div className="hop__vendor">
    //             <div className="vendor__info" key={id}>
    //                 <h3 className="vednor__info">{vendor.name}</h3>
    //                 <h3 className="vednor__info">{vendor.hours}</h3>
    //                 <h3 className="vednor__info">{vendor.phone}</h3>
    //                 <h3 className="vednor__info">{vendor.blurb}</h3>
    //             </div>
    //         </div>
    //     })
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