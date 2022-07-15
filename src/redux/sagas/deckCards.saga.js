import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addCardsToDeck(action) {
    try {
        yield axios.post('/api/deckCards/', action.payload);

        yield put ({
            type: 'FETCH_CARDS_IN_DECK',
            payload: {id: action.payload.id}
          })
    }
    catch (err) {
        console.error('failed to add cards', err);
    }

}

function* deleteCardFromDeck(action) {
    try{
      const deleteConfirm =  yield axios.delete(`/api/deckCards/${action.payload.deck_id}/${action.payload.id}` );

      yield put ({
        type: 'FETCH_CARDS_IN_DECK',
        payload: {id: action.payload.deck_id}
      })
    }

    catch(err) {
        console.error('err in delete card', err);
    }
}

function* fetchCardsInDeck(action) {
    try {
        const deckList = yield axios.get(`/api/deckCards/${action.payload.id}`);
        console.log(deckList);
        const deckObjectForReducer = (deckList.data).reduce(
            (obj, item) => ({
                ...obj, [item.id]: item
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
    yield takeLatest('DELETE_CARD_FROM_DECK', deleteCardFromDeck);
}

export default deckCards;