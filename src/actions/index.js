import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';


export const getChars = (house) => {
    return(dispatch => {
        dispatch({type:FETCH_START});
        axios.get(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
          .then(resp => {
              dispatch({type: FETCH_SUCCESS, payload:resp.data})
          })
          .catch(error => {
            dispatch({type: FETCH_FAILED, payload: error})
          })
    });
}
export const getAllChars = () => {
    return(dispatch => {
        dispatch({type:FETCH_START});
        axios.get(`http://hp-api.herokuapp.com/api/characters/`)
          .then(resp => {
              dispatch({type: FETCH_SUCCESS, payload:resp.data})
          })
          .catch(error => {
            dispatch({type: FETCH_FAILED, payload: error})
          })
    });
}

export const fetchStart = () => {
    return({type:FETCH_START});
}
export const fetchSuccess = (characters) => {
    return({type:FETCH_SUCCESS, payload:characters});
}
export const fetchFailed = (error) => {
    return({type:FETCH_FAILED, payload: error});
}