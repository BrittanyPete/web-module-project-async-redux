

import charData from '../data'



const initialState = {
    character: charData,
    searching: false,
    error: ''
}


export const reducer = (state = initialState, action) => {
    console.log('3. passes action into the reducer', action);
    // console.log('initialState:', state);
    switch (action.type) {
 
        default:
            return state;
    }
};