import './Map.css';
import hoplandmap from '../pics/hoplandmap.jpeg'

function Map() {
    return (
            <div className="hop__map">
                <img src={hoplandmap} alt="Destination Hopland Map" className="hop__map"></img>
            </div>
    )
}

export default Map;