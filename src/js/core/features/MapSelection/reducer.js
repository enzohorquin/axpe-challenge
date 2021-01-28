import { UPDATE_MAP_LOCATION } from './constants';

const initialState = {
    mapLocation: {
        lat: 41.390205,
        lng: 2.154007,
        address: 'Barcelona, Cataluña Spain'
    }
}

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_MAP_LOCATION: {
            return {
                mapLocation: payload
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;