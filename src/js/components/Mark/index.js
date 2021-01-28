import { connect } from 'react-redux';
import Marker from './Marker';

const mapStateToProps = state => ({
    mapLocation: state.map.mapLocation
});

export default connect(mapStateToProps)(Marker);