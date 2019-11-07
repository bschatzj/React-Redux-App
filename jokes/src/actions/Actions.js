import axios from 'axios';
export const SAVE_JOKE = 'SAVE_JOKE';
export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_ERROR = 'FETCH_JOKE_ERROR';
export const FETCH_DAD_JOKE_START = 'FETCH_DAD_JOKE_START';
export const FETCH_DAD_JOKE_SUCCESS = 'FETCH_DAD_JOKE_SUCCESS';
export const FETCH_DAD_JOKE_ERROR = 'FETCH_DAD_JOKE_ERROR';
export const FETCH_TECH_JOKE_START = 'FETCH_TECH_JOKE_START';
export const FETCH_TECH_JOKE_SUCCESS = 'FETCH_TECH_JOKE_SUCCESS';
export const FETCH_TECH_JOKE_ERROR = 'FETCH_TECH_JOKE_ERROR';
export const FETCH_BAD_JOKE_START = 'FETCH_BAD_JOKE_START';
export const FETCH_BAD_JOKE_SUCCESS = 'FETCH_BAD_JOKE_SUCCESS';
export const FETCH_BAD_JOKE_ERROR = 'FETCH_BAD_JOKE_ERROR';

export function getJoke() {
    console.log('HAHA')
    return dispatch => {
        dispatch({ type: FETCH_JOKE_START });
        axios
            .get('http://api.icndb.com/jokes/random')
            .then(res =>
                dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data.value.joke }),
            )
            .catch(err => dispatch({ type: FETCH_JOKE_ERROR, payload: err }));
    }
};
export function getDadJoke() {
    console.log('HAHA')
    return dispatch => {
        dispatch({ type: FETCH_DAD_JOKE_START });
        axios
            .get("https://sv443.net/jokeapi/category/Miscellaneous")
            .then(res => 
                dispatch({ type: FETCH_DAD_JOKE_SUCCESS, payload: [res.data.setup," " , res.data.delivery] }),
            )
            .catch(err => dispatch({ type: FETCH_DAD_JOKE_ERROR, payload: err }));
    }
};
export function getTechJoke() {
    console.log('HAHA')
    return dispatch => {
        dispatch({ type: FETCH_TECH_JOKE_START });
        axios
            .get("https://sv443.net/jokeapi/category/Programming")
            .then(res => {
                if(res.data.type == 'single'){
                dispatch({ type: FETCH_TECH_JOKE_SUCCESS, payload: res.data.joke})
            }
                else{
                    dispatch({type: FETCH_TECH_JOKE_SUCCESS, payload: [res.data.setup," " , res.data.delivery]})
                }
        })
            .catch(err => dispatch({ type: FETCH_TECH_JOKE_ERROR, payload: err }));
    }
};
export function getBadJoke() {
    console.log('HAHA')
    return dispatch => {
        dispatch({ type: FETCH_BAD_JOKE_START });
        axios
            .get("https://sv443.net/jokeapi/category/Dark")
            .then(res => {
                if(res.data.type == 'single'){
                dispatch({ type: FETCH_BAD_JOKE_SUCCESS, payload: res.data.joke})
            }
                else{
                    dispatch({type: FETCH_BAD_JOKE_SUCCESS, payload: [res.data.setup," " , res.data.delivery]})
                }
        })
            .catch(err => dispatch({ type: FETCH_BAD_JOKE_ERROR, payload: err }));
    }
};


export function saveJoke(item) {
    console.log(item)
    return {
        type: SAVE_JOKE,
        payload: item.join('')
    }
};