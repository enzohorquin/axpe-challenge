import reducer from './reducer';
import { UPDATE_MAP_LOCATION } from './constants';

it('Should Update Marker Location', () => {
    const action = {
        type: UPDATE_MAP_LOCATION,
        payload: {
            address: 'Madrid, Spain',
            lat: 123,
            lng: 123,
        }
    };

    const initialState = {
        mapLocation: {
            lat: 41.390205,
            lng: 2.154007,
            address: 'Barcelona, Cataluña Spain'
        }
    };

    const newState = reducer(initialState, action);
    const expectedState = {
        mapLocation: {
            address: 'Madrid, Spain',
            lat: 123,
            lng: 123,
        }
    };

    expect(newState).toEqual(expectedState);
});

it('Should not update Marker Location', () => {
    const action = {
        type: 'DIFFERENT TYPE',
        payload: {
            address: 'Madrid, Spain',
            lat: 123,
            lng: 123,
        }
    };

    const initialState = {
        mapLocation: {
            lat: 41.390205,
            lng: 2.154007,
            address: 'Barcelona, Cataluña Spain'
        }
    };

    const newState = reducer(initialState, action);


    expect(newState).toEqual(initialState);
});