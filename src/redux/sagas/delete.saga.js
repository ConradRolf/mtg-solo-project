import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteCard(action) {
    try {
        console.log(action.payload)
        yield axios.delete(`/api/deck/${action.payload}`);
        yield put ({type: 'FETCH_DECK' });
    }
    catch (error) {
        console.log('error in search', error)
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_CARD', deleteCard);
}

export default deleteSaga