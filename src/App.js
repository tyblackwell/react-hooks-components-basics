import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article />
      <Comment />
      <Spleen />
    </div>
  );
}

const Spleen = () => <div>This is a test</div>;

export default App;
