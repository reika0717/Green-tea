import React, { Component } from "react";
import Form from "./components/Form";
import v4 from "uuid/v4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: v4(),
      description: "task1",
      completed: false
    };
  }

  render() {
    const { description, completed } = this.state;
    return (
      <div className="App">
        <Form />
        <ul>
          <li
            onClick={() => {
              this.setState({ completed: !completed });
            }}
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {description}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
