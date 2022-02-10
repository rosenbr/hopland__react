import React, {createContext, useState} from "react";

const VendorContext = createContext(undefined);
const VendorDispatchContext = createContext(undefined);

function VendorProvider({children}) {

    const [vendorDetails, setVendorDetails] = useState({
        vendors: [
            {
                id: 1,
                title: 'Nelson Family',
                hours: 'Sun-Sat: 10AM-5PM',
                phone: '(707)462-3755',
                blurb: 'Loreum Ipsum'
                // reservations: 'Yes',
                // directions: 'tee hee',
            },
            {
                id: 2,
                title: 'Jaxon Keys',
                hours: 'Sun-Sat: 10AM-5PM',
                phone: '(707)462-6666',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 3,
                title: 'Saracina',
                hours: 'Sun-Sat: 10AM-5PM',
                phone: '(707)670-0199',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 4,
                title: 'Golden Pig',
                hours: 'Sun-Sat: 11AM-5PM',
                phone: '(707)670-6055',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 5,
                title: 'Golden Pig Wine Shop',
                hours: 'Sun-Sat: 11AM-5PM',
                phone: '(707)744-8375',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 6,
                title: 'McNab Ridge',
                hours: 'Mon-Fri: 9AM-5PM',
                phone: '(707)462-2423',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 7,
                title: 'Brutocao',
                hours: 'Sun-Sat: 10AM-5PM',
                phone: '(707)744-1066',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 8,
                title: 'Cesar Toxqui',
                hours: 'Sat & Sun: 12:30PM-5PM',
                phone: '(707)391-8411',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 9,
                title: 'Terra Savia',
                hours: 'Sun-Sat: 10AM-5PM',
                phone: '(707)744-1114',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 10,
                title: 'Alta Orsa',
                hours: 'Mon-Fri: 8AM-4:30PM',
                phone: '(707)540-4311',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 11,
                title: 'Graziano',
                hours: 'Sun-Sat: 10AM-5PM',
                phone: '(707)744-8466',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 12,
                title: 'McFadden',
                hours: 'Mon-Fri: 9AM-4PM',
                phone: '(800)544-8230',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 13,
                title: 'Hopland Tap',
                hours: 'Wed-Sun: 12PM-8PM',
                phone: '(707)510-9000',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            },
            {
                id: 14,
                title: 'Stockfarm & Campovida',
                hours: 'Fri-Sun: 11AM-4PM',
                phone: '(707)744-1977',
                blurb: 'Loreum Ipsum'
                // reservations: 'Y/N?',
                // directions: 'tee hee',
            }
    ]
    });

    return (
        <VendorContext.Provider value={vendorDetails} >
            <VendorDispatchContext.Provider value={setVendorDetails}>
                {children}
            </VendorDispatchContext.Provider>
        </VendorContext.Provider>
    )
}

export default { VendorProvider, VendorContext, VendorDispatchContext };