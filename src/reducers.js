import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
    searchField: ''
}

export const searchHeroes = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:  
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}