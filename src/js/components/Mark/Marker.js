import { Marker } from '@react-google-maps/api';

const MarkerComponent = ({ mapLocation }) => (
    <Marker key={mapLocation.address} position={mapLocation} />
);
export default MarkerComponent;
