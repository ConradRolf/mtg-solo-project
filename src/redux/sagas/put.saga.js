import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* putChange(action) {
    try {
        console.log('action payload in put saga >>>>>>>>>>>>>>>>>', action.payload)
        yield axios.put(`/api/deck`, action.payload);
        yield put ({ type: 'FETCH_DECK' });
    }
    catch (error) {
        console.log('error in PUT', error)
    }
}

function* putSaga() {
    yield takeLatest('PUT_CHANGE', putChange);
}

export default putSaga