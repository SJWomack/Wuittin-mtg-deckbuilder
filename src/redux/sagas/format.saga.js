import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFormatDecks () {
   try{  
   const formatDecks = yield axios.get('/api/deck/format')
    console.log('format decks success')
   }
   catch (err) {
    console.error('can not get format decks', err);
   }
}

function* formatSaga(){
    yield takeLatest ('FETCH_FORMAT_DECKS', fetchFormatDecks);
}

export default formatSaga;