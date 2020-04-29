import { LOAD_POSTS, SEARCH_TEXT_CHANGED, SEARCHING_POSTS_END, SEARCHING_POSTS_ERROR, SEARCHING_POSTS_START, SEARCH_COMMAND, } from "./constants";
  
  export const onTextChange = (text) => ({
    type: SEARCH_TEXT_CHANGED,
    payload: text
  });
  
  export const onSearchStarted = () => ({
    type: SEARCHING_POSTS_START
  });
  
  export const onSearchEnd = () => ({
    type: SEARCHING_POSTS_END
  });
   
  export const onLoadPosts = (posts) => ({
    type: LOAD_POSTS,
    payload: posts,
  });
  
  export const onSearchCommand = (text) => ({
    type: SEARCH_COMMAND,
    payload: text,
  });
  
  export const onSearchError = (error) => ({
    type: SEARCHING_POSTS_ERROR,
    payload: error
  });
 