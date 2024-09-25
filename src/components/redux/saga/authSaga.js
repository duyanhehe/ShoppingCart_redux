// store/sagas/authSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
} from "../slice/authSlice";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../config/firebase";

// Firebase Login API Call
function loginApi({ email, password }) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Firebase Signup API Call
function signUpApi({ email, password }) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login Saga
function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    const user = response.user;
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

// Signup Saga
function* signUpSaga(action) {
  try {
    const response = yield call(signUpApi, action.payload);
    const user = response.user;
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

// Watcher Sagas
function* watchAuth() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(signUpRequest.type, signUpSaga);
}

export default watchAuth;
