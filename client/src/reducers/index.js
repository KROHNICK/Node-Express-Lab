import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESSFUL,
  FETCHING_POSTS_FAILURE,
  ADDING_POSTS,
  ADDING_POSTS_SUCCESSFUL,
  ADDING_POSTS_FAILURE,
  FETCHING_POSTS_ID,
  FETCHING_POSTS_ID_SUCCESSFUL,
  FETCHING_POSTS_ID_FAILURE,
  DELETING_POSTS_ID,
  DELETING_POSTS_ID_SUCCESSFUL,
  DELETING_POSTS_ID_FAILURE,
  UPDATING_POSTS_ID,
  UPDATING_POSTS_ID_SUCCESSFUL,
  UPDATING_POSTS_ID_FAILURE
} from "../actions";

const initialState = {
  err: null,
  posts: [],
  fetchingPosts: false,
  fetchedPosts: false,
  addingPosts: false,
  addedPosts: false,
  deletingPosts: false,
  deletedPosts: false,
  updatingPosts: false,
  updatedPosts: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };
    case FETCHING_POSTS_SUCCESSFUL:
      return {
        ...state,
        posts: action.payload,
        fetchingPosts: false,
        fetchedPosts: true
      };
    case FETCHING_POSTS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        err: action.payload
      };
    case ADDING_POSTS:
      return {
        ...state,
        addingPosts: true
      };
    case ADDING_POSTS_SUCCESSFUL:
      return {
        ...state,
        posts: action.payload,
        addingPosts: false,
        addedPosts: true
      };
    case ADDING_POSTS_FAILURE:
      return {
        ...state,
        addingPosts: false,
        err: action.payload
      };
    case FETCHING_POSTS_ID:
      return {
        ...state,
        fetchingPosts: true
      };
    case FETCHING_POSTS_ID_SUCCESSFUL:
      return {
        ...state,
        posts: action.payload,
        fetchingPosts: false,
        fetchedPosts: true
      };
    case FETCHING_POSTS_ID_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        err: action.payload
      };
    case DELETING_POSTS_ID:
      return {
        ...state,
        deletingPosts: true
      };
    case DELETING_POSTS_ID_SUCCESSFUL:
      return {
        ...state,
        posts: action.payload,
        deletingPosts: false,
        deletedPosts: true
      };
    case DELETING_POSTS_ID_FAILURE:
      return {
        ...state,
        deletingPosts: false,
        err: action.payload
      };
    case UPDATING_POSTS_ID:
      return {
        ...state,
        updatingPosts: true
      };
    case UPDATING_POSTS_ID_SUCCESSFUL:
      return {
        ...state,
        posts: action.payload,
        updatingPosts: false,
        updatedPosts: true
      };
    case UPDATING_POSTS_ID_FAILURE:
      return {
        ...state,
        udpatingPosts: false,
        err: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
