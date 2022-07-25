import { useState, useEffect } from "react";
import { getPosts } from "./API/axios";

import SearchBar from "./components/SearchBar";
import ListPage from "./components/ListPage";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  return (
    <div className="app">
      <h1>Search Form</h1>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div>
  );
}

export default App;
