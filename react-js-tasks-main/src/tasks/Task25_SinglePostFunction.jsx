// Task25_SinglePostFunction.jsx
import React, { useEffect, useState } from "react";

function Task25_SinglePostFunction() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);

  return (
    <div>
      <h3>Post 1 (Function)</h3>
      {post && <p>{post.title}</p>}
    </div>
  );
}

export default Task25_SinglePostFunction;
