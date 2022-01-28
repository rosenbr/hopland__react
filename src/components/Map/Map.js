import './Map.css';
import hoplandmap from '../pics/hoplandmap.jpeg'

function Map() {
    return (
            <div class="hop__map">
                <img src={hoplandmap} alt="Destination Hopland Map" class="hop__map"></img>
            </div>
    )
}

export default Map;