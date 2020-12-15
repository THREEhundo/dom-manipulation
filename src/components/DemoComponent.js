import React from "react";
import ReactDOM from "react-dom";

class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>Hello {user}</h2>
        <h3>Welcome to GeeksforGeeks</h3>
        <Parent />
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    return (
      <div>
        <h2>You are inside the Parent Component</h2>
        <Child name="Drew" userId="420BlazeIt" />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    const { name, userId } = this.props;
    return (
      <div>
        <h3>Hello, {name}</h3>
        <h4>Your user id is: {userId}</h4>
      </div>
    );
  }
}
// ReactDOM.render(
//   <DemoComponent user="Sam Baik" />,
//   document.getElementById("root")
// );

export default DemoComponent;
