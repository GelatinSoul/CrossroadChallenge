import { SEARCH_TITLE, GET_TITLES, GET_TITLE } from '../actions/types';

const initialState = {
    text: '',
    titles: [],
    title: [],
    id: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_TITLE:
            return {
                ...state,
                text: action.payload
            };
        case GET_TITLES:
            return {
                ...state,
                titles: action.payload
            }
        case GET_TITLE:
            return {
                ...state,
                title:action.payload
            }
        default:
            return state;

    }
}