import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFormatDecks (action) {
   try{  
   const formatDecks = yield axios.get(`/api/deck/format/${action.payload}`)
   console.log(formatDecks.data)
    yield put ({
        type: 'SET_FORMAT_DECKS',
        payload: formatDecks.data
    })
   } 
   catch (err) {
    console.error('can not get format decks', err);
   }
}

function* formatSaga(){
    yield takeLatest ('FETCH_FORMAT_DECKS', fetchFormatDecks);
}

export default formatSaga;