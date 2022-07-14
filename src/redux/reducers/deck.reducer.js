import { combineReducers } from 'redux';

const deckBuildList = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DECK_LIST':
            return action.payload;

        case 'ADD_TO_CURRENT_BUILD':
            return { ...state, [action.payload.id]: action.payload };

        case 'UPDATE_WORKING_QUANTITY':
            return { ...state, [action.payload.id]: { ...state[action.payload.id], quantity: action.payload.cardCount } }

        case 'DELETE_CARD':
            const key = action.payload.id
            const { [key]: { }, ...restState } = state
            return restState;

        case 'CLEAR_DECK_BUILD':
            return {};

        default:
            return state;
    }
}

const workingDeckData = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WORKING_DECK':
            return action.payload;
        case 'CLEAR_WORKING_DECK':
            return {};
        default:
            return state;
    }
}

const cardsToAdd = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TO_CARDS_TO_ADD':
            return { ...state, [action.payload.id]: action.payload };
        case 'CLEAR_CARDS_TO_ADD':
            return {};
            case 'UPDATE_ADD_QUANTITY':
            return { ...state, [action.payload.id]: { ...state[action.payload.id], quantity: action.payload.cardCount } }
        case 'DELETE_CARD_TO_ADD':
            const key = action.payload.id
            const { [key]: { }, ...restState } = state
            return restState;
        default:
            return state;
    }
}

const editDeckMode = (state = false, action) => {
    switch (action.type){
        case 'SET_EDIT_MODE':
            return true;
        case 'LEAVE_EDIT_MODE':
            return false;
        default:
           return state;
    }
}



const deckBuildReducer = combineReducers({
    deckBuildList,
    workingDeckData,
    cardsToAdd,
    editDeckMode

})

export default deckBuildReducer;


