import { SEARCH_TEXT_CHANGED, SEARCHING_POSTS_START, SEARCHING_POSTS_END, LOAD_POSTS, SEARCHING_POSTS_ERROR } from "./constants";
  
  const initialState = {
    searchText: 'funny',
    posts: [],
    searching: false,
    error: null,
  };
  

  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCHING_POSTS_START:
        return {
          ...state,
          searching: true,
        };
      case SEARCHING_POSTS_END:
        return {
          ...state,
          searching: false,
        };
      case LOAD_POSTS:{
        return {
          ...state,
          posts: action.payload,
        }
      }
      case SEARCH_TEXT_CHANGED:
        return {
          ...state,
          searchText: action.payload,
        };
      case SEARCHING_POSTS_ERROR:
        return {
          ...state,
          searching: false,
          error: action.payload,
        } ;
      
        default:
        return state;
    }
  }
  