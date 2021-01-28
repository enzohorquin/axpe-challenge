import './styles.scss';

const Locate = ({ panTo }) => (
    <button
        className="locate"
        onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => null
            );
        }}
    >
    </button>
);
export default Locate;