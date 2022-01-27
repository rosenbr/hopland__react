import './Vendor.css';
// import Card from '../Card/Card';

function Vendor(props) {
    const vendor = [
        {
            name: 'Nelson Family',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "qpslcmfhep"
        },
        {
            name: 'Jaxon Keys',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "qpalsmdneh"
        },
        {
            name: 'Saracina',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "xbvndjelsp"
        },
        {
            name: 'Golden Pig',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "zsrdmpuhng"
        },
        {
            name: 'Golden Pig Wine Shop',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "qewppcheng"
        },
        {
            name: 'McNab Ridge',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "ghemspcong"
        },
        {
            name: 'Brutocao',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "zwimtbcpga"
        },
        {
            name: 'Cesar Toxqui',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "wsrltmbcod"
        },
        {
            name: 'Terra Savia',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "yxnblpsyen"
        },
        {
            name: 'Alta Orsa',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "sngjhltmen"
        },
        {
            name: 'Graziano',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "xmnbpelvms"
        },
        {
            name: 'McFadden',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "qpvneixlwn"
        },
        {
            name: 'Hopland Tap',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "wpfkvnrhdy"
        },
        {
            name: 'Stockfarm & Campovida',
            hours: 'M-F, 9-5',
            phone: '(510)555-5555',
            blurb: 'Loreum Ipsum',
            reservations: 'Y/N?',
            directions: 'tee hee',
            _id: "fjdkeovpfn"
        }
    ]
    

    const generateVendor = vendor => {
        return vendor.map(function (vendor) {
            return (
            <div clas="hop__card">
                <Vendor />
            </div>   
                )
        });
    }

    return (
        <div class="hop__vendor">
            {/* <h3 key={vendor._id}>Pic Placeholder copy image address</h3> */}
            <h3 key={vendor._id}>{props.name}</h3>
            {/* <h4 key={vendor._id}>{props.hours}</h4> */}
            {/* <h4 key={vendor._id}>{props.phone}</h4> */}
            {/* <p key={vendor._id}>Blurb</p> */}
            {/* <h4 key={vendor._id}>Reso's</h4> */}
            {/* <h4 key={vendor._id}>Directions</h4> */}
            {/* {generateVendor(vendor)} */}
            {/* <Card /> */}
        </div>
    )
}

export default Vendor;