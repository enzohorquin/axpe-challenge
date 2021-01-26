import { GoogleMap, useLoadScript } from '@react-google-maps/api';
const libraries = ['places'];

const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 43.653225,
    lng: -79.383186
}

const options = {
    disableDefaultUI: true,
    zoomControl: true
}

const Map = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });
    if (loadError) return "Error Loading Map";
    if (!isLoaded) return "Loading..."

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}>
            </GoogleMap>
        </div>
    )

}
export default Map;
