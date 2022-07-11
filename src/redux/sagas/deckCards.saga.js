import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addCardsToDeck(action) {
    try {
        yield axios.post('/api/deckCards/', action.payload);

        yield put({ type: 'CLEAR_DECK_BUILD' });
        yield put({ type: 'CLEAR_WORKING_DECK' });


    }
    catch (err) {
        console.error('failed to add cards', err);
    }

}

function* fetchCardsInDeck(action) {
    try {
        const deckList = yield axios.get(`/api/deckCards/${action.payload.id}`);
        console.log(deckList);
        const deckObjectForReducer = (deckList.data).reduce(
            (obj, item) => ({
                ...obj, [item.card_id]: item
            }), {});
        console.log(deckObjectForReducer);

        yield put({
            type: 'SET_DECK_LIST',
            payload: deckObjectForReducer
        })


    }
    catch (err) {
        console.error('error fetching deck list', err);
    }
}

function* deckCards() {
    yield takeLatest('ADD_CARDS_TO_DECK', addCardsToDeck);
    yield takeLatest('FETCH_CARDS_IN_DECK', fetchCardsInDeck);
}

export default deckCards;