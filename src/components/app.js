import React, { Component } from "react";

const JournalEntry = () => {
  return {
    title: "Some content",
    content: "Details..."
  };
};

const journalData = [<JournalEntry />, <JournalEntry />];

const JournalList = () => {
  const journalEntries = journalData.map(journalEntry => <p>journalEntry</p>);
  return journalEntries;
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
