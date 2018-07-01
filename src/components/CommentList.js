import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  };

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CommentList);
