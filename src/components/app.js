import React, { Component } from "react";

const JournalList = () => {
  return "Some journal entries...";
};

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State Deep Dive</h1>

        <JournalList />
      </div>
    );
  }
}
