import React from "react";
import InfiniteScroller from "./components/InfiniteScroller";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Github Trending Repos</h1>
        <h5>in last 10 days</h5>
      </header>
      <InfiniteScroller />
    </div>
  );
};

export default App;
