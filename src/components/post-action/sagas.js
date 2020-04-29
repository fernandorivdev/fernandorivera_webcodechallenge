import { takeEvery, call } from 'redux-saga/effects';
import { POST_ACTION } from "./constants";

function* applyAction(action) {
  const { actionName, post } = action.payload;
  const link = `http://www.reddit.com${post.permalink}`;
  switch (actionName) {
    case 'link':
      yield call(window.open, link , '_blank');
      break;
    case 'email':
      window.location.href = `mailto:fernandorivera@example.com?subject=Check out this Reddit post&body=<a href="${link}"> ${link}</a>`;
      break;
    default :
    
  }
}

export default function* ({ api }) {
  yield takeEvery(POST_ACTION ,applyAction)
};