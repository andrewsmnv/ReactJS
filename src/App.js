import React from "react";
import "./App.css";
import text from "./data/text";
import Anything from "./components/Anything";
import Picture from "./components/Picture";

class App extends React.Component {
  render() {
    const anythingRender = text.map(item => <Anything item={item} />);
    return (
      <div>
        {anythingRender}
        <Picture />
      </div>
    );
  }
}
export default App;
