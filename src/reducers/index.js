import { DATA_FETCH, DATA_FAILED, DATA_SUCCESS } from "../actions";



const initialState = {
    character: {
        name: 'Brittany',
        house: 'Ravenclaw',
        wizard: true,
        image: ``, 
        dateOfBirth: 'Jan 1, 1988',
    },
    isFetching: false,
    error: ''
}


export const reducer = (state = initialState, action) => {
    console.log('3. passes action into the reducer', action);
    console.log('initialState:', state);
    switch (action.type) {
        case DATA_FETCH:
            console.log('4. execute FETCH_DATA action.')
            return {
                ...state,
                character: {},
                isFetching: true,
                error: ''
            };
        case DATA_FAILED:
            return {
                ...state,
                character: {},
                isFetching: false,
                error: action.payload
            };
        case DATA_SUCCESS:
            return {
                ...state,
                character: action.payload,
                isFetching: false,
                error: ''
            };        
        default:
            return state;
    }
};