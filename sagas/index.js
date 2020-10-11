import axios from 'axios';
import { all, call } from 'redux-saga/effects';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga(){
	yield all([

	])
}
