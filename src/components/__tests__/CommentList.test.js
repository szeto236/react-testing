import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = { comments: ['new comment 1', 'new comment 2'] };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('new comment 1');
  expect(wrapped.render().text()).toContain('new comment 2');
});
