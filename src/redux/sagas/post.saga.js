import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addToDeck(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/deck', action.payload)

    } catch (error) {
        console.log('error POSTing', error);
    }
}

function* postSaga() {
    yield takeLatest('ADD_CARD', addToDeck)
}

export default postSaga;