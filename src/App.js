import { useState, useEffect } from "react";
import { getPosts } from "./API/axios";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <div className="app">
      <h1>App Component</h1>
    </div>
  );
}

export default App;
