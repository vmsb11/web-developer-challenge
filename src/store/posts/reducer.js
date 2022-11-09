import {
  ADD_POST,
  DELETE_POST,
  SELECT_POST
} from './actionTypes';

const INIT_STATE = {
  posts: [],
  selectedPost: null,
  count: 0
};

const postReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload
      };

    case ADD_POST:

      const newPost = action.payload;
      const updatedPosts = state.posts;

      updatedPosts.push(newPost);

      return {
        ...state,
        posts: updatedPosts,
        selectedPost: newPost,
        count: state.count + 1
      };

    case DELETE_POST:

      const postDeleted = action.payload;

      const newPosts = state.posts.filter((post, index) => {
        return post.id !== postDeleted.id;
      });
      
      return {
        ...state,
        posts: newPosts,
        selectedPost: action.payload,
        count: state.count - 1
      };

    default:
      return state;
  }
};

export default postReducer;
