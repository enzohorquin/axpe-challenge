import Search from './Search';
import { connect } from 'react-redux';
import { updateMapLocation } from '../../core/features/MapSelection/actions';

const mapStateToProps = state => ({
    mapLocation: state.map.mapLocation
});

const mapDispatchToProps = dispatch => ({
    updateMapLocation: (payload) => dispatch(updateMapLocation(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);