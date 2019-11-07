import {
    SAVE_JOKE,
    FETCH_JOKE_START,
    FETCH_JOKE_ERROR,
    FETCH_JOKE_SUCCESS,
    FETCH_DAD_JOKE_ERROR,
    FETCH_DAD_JOKE_START,
    FETCH_DAD_JOKE_SUCCESS,
    FETCH_TECH_JOKE_ERROR,
    FETCH_TECH_JOKE_START,
    FETCH_TECH_JOKE_SUCCESS,
    FETCH_BAD_JOKE_ERROR,
    FETCH_BAD_JOKE_START,
    FETCH_BAD_JOKE_SUCCESS
} from '../actions/Actions';


const initialState = {
    joke: 'knock knock',
    isLoading: false,
    savedJokes: [],
}

export function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_JOKE_START:
            console.log('hi')
            return {
                ...state,
                isLoading: true
            };
        case FETCH_JOKE_SUCCESS:
            console.log('hi')
            return {
                ...state,
                joke: [...action.payload],
                isLoading: false
            };
        case FETCH_JOKE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case FETCH_DAD_JOKE_START:
            console.log('hi')
            return {
                ...state,
                isLoading: true
            };
        case FETCH_DAD_JOKE_SUCCESS:
            console.log('hi')
            return {
                ...state,
                joke: [...action.payload],
                isLoading: false
            };
        case FETCH_DAD_JOKE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case FETCH_TECH_JOKE_START:
            console.log('hi')
            return {
                ...state,
                isLoading: true
            };
        case FETCH_TECH_JOKE_SUCCESS:
            console.log('hi')
            return {
                ...state,
                joke: [...action.payload],
                isLoading: false
            };
        case FETCH_TECH_JOKE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case FETCH_BAD_JOKE_START:
            console.log('hi')
            return {
                ...state,
                isLoading: true
            };
        case FETCH_BAD_JOKE_SUCCESS:
            console.log('hi')
            return {
                ...state,
                joke: [...action.payload],
                isLoading: false
            };
        case FETCH_BAD_JOKE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case SAVE_JOKE:
            return {
                ...state,
                savedJokes: [...state.savedJokes, action.payload]
            }
        default:
            return state;
    }
}
