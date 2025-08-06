// Task25_PostListClass.jsx
import React, { Component } from "react";

class Task25_PostListClass extends Component {
  state = { posts: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    return (
      <div>
        <h3>Posts (Class)</h3>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task25_PostListClass;
