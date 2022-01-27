import './Card.css';

function Card(props) {

        const vendor = [
            {
                name: 'Nelson Family',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "0"
            },
            {
                name: 'Jaxon Keys',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "1"
            },
            {
                name: 'Saracina',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "2"
            },
            {
                name: 'Golden Pig',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "3"
            },
            {
                name: 'Golden Pig Wine Shop',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "4"
            },
            {
                name: 'McNab Ridge',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "5"
            },
            {
                name: 'Brutocao',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "6"
            },
            {
                name: 'Cesar Toxqui',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "7"
            },
            {
                name: 'Terra Savia',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "8"
            },
            {
                name: 'Alta Orsa',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "9"
            },
            {
                name: 'Graziano',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "10"
            },
            {
                name: 'McFadden',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "11"
            },
            {
                name: 'Hopland Tap',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "12"
            },
            {
                name: 'Stockfarm & Campovida',
                hours: 'M-F, 9-5',
                phone: '(510)555-5555',
                blurb: 'Loreum Ipsum',
                reservations: 'Y/N?',
                directions: 'tee hee',
                _id: "13"
            }
        ]
    

    const generateCard = vendor => {
        return vendor.map(function (vendor) {
            return <h3>{vendor.name}</h3>
        });
    }

    return (
        <div class="hop__card">
            {/* <h3>Pic Placeholder</h3> */}
            {/* <h3>{props.name}</h3> */}
            {/* <h4>Hours</h4> */}
            {/* <h4>Phone</h4> */}
            {/* <p>Blurb</p> */}
            {/* <h4>Reso's</h4> */}
            {/* <h4>Directions</h4> */}
            {generateCard(vendor)}
        </div>
    )
}

//   const generateCard = vineyard => {
//     return vendor.getElementById(data => {
//       return <Card name={data.name} hours={data.hours} phone={data.phone} blurb={data.blurb} reservations={data.reservations} directions={data.directions}/>
//     })
//   }

//   return (
//       <div class="hop__card">
//           {generateCard(state.vineyard)}
//       </div>
//   )
// }

export default Card;