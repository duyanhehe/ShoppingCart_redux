import { takeLatest, call, put } from "redux-saga/effects";
import { getDatabase, ref, set } from "firebase/database";
import {
  confirmBuy,
  confirmBuySuccess,
  confirmBuyFailure,
  resetCart,
} from "../slice/cartSlice";
import { notification } from "antd";

function* confirmBuySaga(action) {
  console.log(action);
  const { cart, user } = action.payload;
  const db = getDatabase();

  try {
    // Ref for user's purchase
    const purchaseRef = ref(db, `purchases/${user.uid}`);

    // Save cart data to firebase
    yield call(set, purchaseRef, {
      items: cart.list,
      total: cart.total,
      date: new Date().toISOString(),
    });

    // On success
    yield put(confirmBuySuccess());
    yield put(resetCart());

    notification.success({
      message: "Purchase Confirmed",
      description: "Your purchase has been successfully saved",
    });
  } catch (error) {
    // On failure
    yield put(confirmBuyFailure(error.message));
    notification.error({
      message: "Purchase Failed",
      description: error.message,
    });
  }
}

export default function* watchConfirmBuy() {
  yield takeLatest(confirmBuy.type, confirmBuySaga);
}
