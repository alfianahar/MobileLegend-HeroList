import { CHANGE_SEARCHFIELD } from './constants';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
}