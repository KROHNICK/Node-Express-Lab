import axios from "axios";

export const FETCHING_POSTS = "FETCHING_POSTS";
export const FETCHING_POSTS_SUCCESSFUL = "FETCHING_POSTS_SUCCESSFUL";
export const FETCHING_POSTS_FAILURE = "FETCHING_POSTS_FAILURE";

export const ADDING_POSTS = "ADDING_POSTS";
export const ADDING_POSTS_SUCCESSFUL = "ADDING_POSTS_SUCCESSFUL";
export const ADDING_POSTS_FAILURE = "ADDING_POSTS_FAILURE";

export const FETCHING_POSTS_ID = "FETCHING_POSTS_ID";
export const FETCHING_POSTS_ID_SUCCESSFUL = "FETCHING_POSTS_ID_SUCCESSFUL";
export const FETCHING_POSTS_ID_FAILURE = "FETCHING_POSTS_ID_FAILURE";

export const DELETING_POSTS_ID = "DELETING_POSTS_ID";
export const DELETING_POSTS_ID_SUCCESSFUL = "DELETING_POSTS_ID_SUCCESSFUL";
export const DELETING_POSTS_ID_FAILURE = "DELETING_POSTS_ID_FAILURE";

export const UPDATING_POSTS_ID = "UPDATING_POSTS_ID";
export const UPDATING_POSTS_ID_SUCCESSFUL = "UPDATING_POSTS_ID_SUCCESSFUL";
export const UPDATING_POSTS_ID_FAILURE = "UPDATING_POSTS_ID_FAILURE";

export const getPosts = dispatch => {
  dispatch({ type: FETCHING_POSTS });
  axios
    .get("https://kanek-perez.herokuapp.com/api/posts")
    .then(res => {
      console.log("posts");
      dispatch({ type: FETCHING_POSTS_SUCCESSFUL, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCHING_POSTS_FAILURE, payload: err }));
};

export const addPost = newPost => dispatch => {
  dispatch({ type: ADDING_POSTS });
  axios
    .post("https://kanek-perez.herokuapp.com/api/posts", newPost)
    .then(res => dispatch({ type: ADDING_POSTS_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: ADDING_POSTS_FAILURE, payload: err }));
};

export const getPost = dispatch => {
  dispatch({ type: FETCHING_POSTS_ID });
  axios
    .get("https://kanek-perez.herokuapp.com/api/posts/:id")
    .then(res =>
      dispatch({ type: FETCHING_POSTS_ID_SUCCESSFUL, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCHING_POSTS_ID_FAILURE, payload: err }));
};

export const deletePosts = dispatch => {
  dispatch({ type: DELETING_POSTS_ID });
  axios
    .delete("https://kanek-perez.herokuapp.com/api/posts/:id")
    .then(res =>
      dispatch({ type: DELETING_POSTS_ID_SUCCESSFUL, payload: res.data })
    )
    .catch(err => dispatch({ type: DELETING_POSTS_ID_FAILURE, payload: err }));
};

export const updatePosts = dispatch => {
  dispatch({ type: DELETING_POSTS_ID });
  axios
    .update("https://kanek-perez.herokuapp.com/api/posts/:id")
    .then(res =>
      dispatch({ type: DELETING_POSTS_ID_SUCCESSFUL, payload: res.data })
    )
    .catch(err => dispatch({ type: DELETING_POSTS_ID_FAILURE, payload: err }));
};
