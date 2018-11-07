import axios from 'axios'
import {ADD_ONE, GET_ALL} from './actionTypes'

export const addOne = article => ({
    type: ADD_ONE,
    payload: article
})

const getAllsync = articles => ({
    type: GET_ALL,
    payload: articles
})

export const getAll = () => dispatch => {
    axios.get('http://localhost:8080/articles')
        .then(({data}) => dispatch(getAllsync(data)))
}