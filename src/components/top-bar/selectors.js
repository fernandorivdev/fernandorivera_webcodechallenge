import { statePath } from "./constants";

const selectTopBarState = state => state[statePath];

export const selectSearchText = state => selectTopBarState(state).searchText;

export const selectPosts = state => selectTopBarState(state).posts;

export const selectIsSearching = state => selectTopBarState(state).searching;
