import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";
import css from './Square.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    return (
      <div className="square"></div>
    )
  }
};

export default Square;
