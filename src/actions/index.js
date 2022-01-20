import axios from 'axios';

export const DATA_FETCH = 'DATA_FETCH';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILED = 'DATA_FAILED';


export const getCharacters = () => {
    return (dispatch) => {
        dispatch({type:DATA_FETCH});
        axios.get(`http://hp-api.herokuapp.com/api/characters`)
            .then(res => {
                console.log('response:', res.data[0]);
                dispatch({type: DATA_SUCCESS, payload: res.data[0]});
            })
            .catch(err => {
                dispatch({type: DATA_FAILED, payload: err})
            })
    }
}


export const dataFetch = () => {
    console.log('2. fetching data action');
    return({type:DATA_FETCH});
}

export const dataSuccess = (characters) => {
    return({type:DATA_SUCCESS, payload: characters});
}

export const dataFailed = (error) => {
    return({type:DATA_FAILED, payload: error});
}