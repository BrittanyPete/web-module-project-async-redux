import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from './../actions';

const initialState = {
    character: [],
    searching: false,
    error: ''
}


export const reducer = (state = initialState, action) => {
    console.log('3. passes action into the reducer', action);
    // console.log('initialState:', state);
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                searching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                searching: false,
                character: action.payload,
                error: ''
            };
        case FETCH_FAILED:
            return {
                ...state,
                character:[],
                searching: false,
                error: ''
            };
        default:
            return state;
    }
};