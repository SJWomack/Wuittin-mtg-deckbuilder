import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addCardsToDeck (action) {
  try{
     yield axios.post('/api/deckCards/', action.payload)
  }
  catch(err) {
    console.error('failed to add cards', err);
  }
  
}

function* deckCards() {
  yield takeLatest('ADD_CARDS_TO_DECK', addCardsToDeck);
}

export default deckCards;