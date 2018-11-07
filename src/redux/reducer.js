import {ADD_ONE, GET_ALL} from './actions/actionTypes'

const INITIAL_STATE = {
    articles: []
}


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL:
            return {...state, articles: [...action.payload]}
        case ADD_ONE:
            return {...state, articles: [...state.articles, action.payload]}
        default:
            return state;
    }
}

export default reducer