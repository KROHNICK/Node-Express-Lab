import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return <div>{/* {this.props.p} */}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(PostList);
