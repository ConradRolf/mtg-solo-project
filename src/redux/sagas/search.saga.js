import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchCards(action) {
    try {
        yield axios.get('/api/user/search', action.payload);
    }
    catch (error) {
        console.log('error in search', error)
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_CARDS', searchCards);
}

export default searchSaga