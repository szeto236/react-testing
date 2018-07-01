import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';
import { combineReducers } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux/node_modules/redux';

it('handles save actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['new comment']);
});

it('handles actions with unknown type', () => {
  const newState = commentsReducer([], { type: 'unknown_type' });

  expect(newState).toEqual([]);
});
