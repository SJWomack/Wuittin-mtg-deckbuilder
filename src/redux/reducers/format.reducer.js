import { combineReducers } from 'redux';

const formatReducer = (state ='', action ) => {
    switch (action.type){
        case 'SET_FORMAT_DECKS':
            return action.payload;
        case 'CLEAR_FORMAT':
            return state;
        default:
            return state;
    }
}

export default formatReducer;
  