import {
  ADD_POST,
  DELETE_POST,
  SELECT_POST
} from './actionTypes';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const deletePost = (post) => ({
  type: DELETE_POST,
  payload: post,
});

export const selectPost = (post) => ({
  type: SELECT_POST,
  payload: post,
});
