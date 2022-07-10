import { combineReducers } from 'redux'; 

const deckBuildList = (state = {}, action) => {
    switch (action.type) {
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

const workingDeckData = (state = {}, action) =>{
    switch (action.type) {
        case 'SET_WORKING_DECK':
            return action.payload;
        default: 
            return state;
    }
}



const deckBuildReducer = combineReducers({
    deckBuildList,
    workingDeckData

})

export default deckBuildReducer;


