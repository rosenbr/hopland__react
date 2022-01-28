import './Card.css';

function Card(props) {
    const { name, hours, phone, blurb, reservations, directions, _id } = props.vendor;

    return(
        <div class="hop__card">
            {/* <h3 key={props._id}>{props.name}</h3> */}
            {/* <h4>{name}</h4> */}
            {/* <h4>{hours}</h4> */}
            {/* <h4>{phone}</h4> */}
            {/* <h4>{blurb}</h4> */}
            {/* <h4>{reservations}</h4> */}
            {/* <h4>{directions}</h4> */}
            {/* <h4>{_id}</h4> */}
        </div>
    )
}

export default Card;