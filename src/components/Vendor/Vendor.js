// import Card from '../Card/Card';
import React from 'react';
import './Vendor.css';

class Vendor extends React.Component {
    
    // data = {
    //     name: 'Nelson Family',
    //     hours: 'Sun-Sat: 10AM-5PM',
    //     phone: '(707)462-3755',
    //     blurb: 'Loreum Ipsum',
    //     reservations: 'Yes',
    //     directions: 'tee hee',
    //     _id: "qpslcmfhep"
    // }

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

    // handleClick = () => {
    //     this.setState({send:true})
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    
    render(){
        return (
            <div class="hop__vendor">
                <h3 class="vendor__pic">Pic</h3>
                <div class="vendor__info">
                    <h3 class="vendor__info">Name</h3>
                    <h3 class="vendor__info">Hours</h3>
                    <h3 class="vendor__info">Phone</h3>
                    <h3 class="vendor__blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h3>
                    <h3 class="vendor__directions">Directions</h3>
                </div>
                {/* <h3 class="vendor__reso">Reso's</h3> */}
            </div>
        )
    }
    // state = stuff that changes. props = stuff that is static
    // const vendor = [
    //     {
    //         name: 'Nelson Family',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)462-3755',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Yes',
    //         directions: 'tee hee',
    //         // _id: "qpslcmfhep"
    //     },
    //     {
    //         name: 'Jaxon Keys',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)462-6666',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "qpalsmdneh"
    //     },
    //     {
    //         name: 'Saracina',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)670-0199',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "xbvndjelsp"
    //     },
    //     {
    //         name: 'Golden Pig',
    //         hours: 'Sun-Sat: 11AM-5PM',
    //         phone: '(707)670-6055',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "zsrdmpuhng"
    //     },
    //     {
    //         name: 'Golden Pig Wine Shop',
    //         hours: 'Sun-Sat: 11AM-5PM',
    //         phone: '(707)744-8375',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "qewppcheng"
    //     },
    //     {
    //         name: 'McNab Ridge',
    //         hours: 'Mon-Fri: 9AM-5PM',
    //         phone: '(707)462-2423',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "ghemspcong"
    //     },
    //     {
    //         name: 'Brutocao',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)744-1066',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "zwimtbcpga"
    //     },
    //     {
    //         name: 'Cesar Toxqui',
    //         hours: 'Sat & Sun: 12:30PM-5PM',
    //         phone: '(707)391-8411',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "wsrltmbcod"
    //     },
    //     {
    //         name: 'Terra Savia',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)744-1114',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "yxnblpsyen"
    //     },
    //     {
    //         name: 'Alta Orsa',
    //         hours: 'Mon-Fri: 8AM-4:30PM',
    //         phone: '(707)540-4311',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "sngjhltmen"
    //     },
    //     {
    //         name: 'Graziano',
    //         hours: 'Sun-Sat: 10AM-5PM',
    //         phone: '(707)744-8466',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "xmnbpelvms"
    //     },
    //     {
    //         name: 'McFadden',
    //         hours: 'Mon-Fri: 9AM-4PM',
    //         phone: '(800)544-8230',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "qpvneixlwn"
    //     },
    //     {
    //         name: 'Hopland Tap',
    //         hours: 'Wed-Sun: 12PM-8PM',
    //         phone: '(707)510-9000',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "wpfkvnrhdy"
    //     },
    //     {
    //         name: 'Stockfarm & Campovida',
    //         hours: 'Fri-Sun: 11AM-4PM',
    //         phone: '(707)744-1977',
    //         blurb: 'Loreum Ipsum',
    //         reservations: 'Y/N?',
    //         directions: 'tee hee',
    //         // _id: "fjdkeovpfn"
    //     }
    // ]
    

    // const generateVendor = vendor => {
    //     return vendor.map(function (vendor) {
    //         return (
    //         <div clas="hop__vendor">
    //             <Card />
    //         </div>   
    //             )
    //     });
    // }
}

export default Vendor;