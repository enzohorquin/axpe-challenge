import Search from '../../components/Search/index';
import Locate from '../../components/Locate/index';
import Marker from '../../components/Mark/index';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useCallback, useRef } from 'react';

const libraries = ['places'];

const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};

const options = {
    disableDefaultUI: true,
    zoomControl: true
}

const center = {
    lat: 41.390205,
    lng: 2.154007,
}

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Ooops, something went wrong";
    if (!isLoaded) return "Loading...";

    return (
        <div>
            <Locate panTo={panTo} />
            <Search panTo={panTo} />
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
                {isLoaded && <Marker />}
            </GoogleMap>
        </div>
    )
}
export default Map;
