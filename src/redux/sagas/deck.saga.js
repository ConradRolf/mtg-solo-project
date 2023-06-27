import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getDeck() {
    try {
        const deckResponse = yield axios.get(`/api/deck`);
        yield put ({type: 'SET_DECK', payload: deckResponse.data});
    }
    catch (error) {
        console.log('error in getting deck', error)
    }
}

function* deckSaga() {
    yield takeLatest('FETCH_DECK', getDeck);
}

export default deckSaga