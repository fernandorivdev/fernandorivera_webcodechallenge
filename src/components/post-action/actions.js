import { OPEN_POST_ACTIONS, CLOSE_POST_ACTIONS, POST_ANIMATION_TOGGLE, POST_ACTION } from "./constants";

export const openPostAction = (post) => ({
  type: OPEN_POST_ACTIONS,
  payload: post,
})

;export const closePostAction = (post) => ({
  type: CLOSE_POST_ACTIONS,
  payload: post,
});

export const postAnimatingToogle = (on) => ({
  type: POST_ANIMATION_TOGGLE,
  payload: on,
});

export const postAction = ({ actionName, post}) => ({
  type: POST_ACTION,
  payload: { actionName, post },
})
