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

function* fetchDeckData(action) {
    try {
        const deckData = yield axios.get('/api/deck/'+action.payload.id)
        yield put ({
            type: 'SET_WORKING_DECK',
            payload: deckData.data[0]
        })
    }
    catch (err) {
        console.err('err in fetch deck data',err)
    }
}

function* newDeck (action) {
    try{
        const newDeck = yield axios.post('/api/deck/new', action.payload)
        console.log(newDeck.data);
        yield put ({
            type: 'SET_WORKING_DECK',
            payload: newDeck.data[0]
        })
    }
    catch (err){
        console.error('deck creation failed', err);
        return;
    }
}

function* deleteDeck (action) {
    try{
        yield axios.delete('/api/deck/delete/'+action.payload.id)
        alert('Deck Deleted!')
    }
    catch(err) {
        console.error('deck delete failed',err)
    }
}

function* decksSaga(){
    yield takeLatest ('FETCH_FORMAT_DECKS', fetchFormatDecks);
    yield takeLatest ('CREATE_DECK', newDeck);
    yield takeLatest ('DELETE_DECK', deleteDeck);
    yield takeLatest ('FETCH_DECK_DATA', fetchDeckData);
}

export default decksSaga;