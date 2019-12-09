import React from "react";
import styles from "./styles.css";

class Anything extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <div>
          <p>{this.props.item.string}</p>
          <p>{this.props.item.anotherString}</p>
        </div>
      </div>
    );
  }
}
export default Anything;
