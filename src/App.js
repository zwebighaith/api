import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPots] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => setPots(posts.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="App">
      <h1>API</h1>
      {posts.map((post) => (
        <div>
          <h3>
            {" "}
            title:
            {post.title}
          </h3>
          <h5>content: {post.body}</h5>
        </div>
      ))}
    </div>
  );
}

export default App;
