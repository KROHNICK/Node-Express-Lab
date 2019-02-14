import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import PostList from "./components/postList";
import Post from "./components/post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/api/posts" component={PostList} />
        {/* <Route path="/api/posts/:id" component={Post} /> */}
      </div>
    );
  }
}

export default withRouter(App);
