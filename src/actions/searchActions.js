import { SEARCH_TITLE, GET_TITLES, GET_TITLE } from './types';
import axios from 'axios';

export const searchTitle = text => dispatch => {
    dispatch({
        type: SEARCH_TITLE,
        payload: text
    });
};

export const getTitles = text => dispatch => {
    axios.get(`http://localhost:27635/api/Titles/GetTitles?name=${text}`).then(
        response => dispatch({
            type: GET_TITLES,
            payload: response.data
        }))
}

export const searchTitleByID = text => dispatch => {
    axios.get(`http://localhost:27635/api/Titles/GetDetails?id=${text}`).then(
        response => dispatch({
            type: GET_TITLE,
            payload: response.data
        }))
}