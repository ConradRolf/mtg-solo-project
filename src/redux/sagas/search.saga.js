import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchCards(action) {
    try {
        console.log(action.payload)
        const searchResponse = yield axios.get('/api/user/search', action.payload);
        yield put ({type: 'SET_SEARCH', payload: searchResponse.data});
    }
    catch (error) {
        console.log('error in search', error)
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_CARDS', searchCards);
}

export default searchSaga