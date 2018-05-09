import React, { Component } from "react";

const JournalEntry = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

const JournalList = () => {
  const journalData = [
    { title: "Post One", content: "Post content" },
    { title: "Post Two", content: "More content" }
  ];

  const journalEntries = journalData.map(journalEntry => {
    return (
      <JournalEntry title={journalEntry.title} content={journalEntry.content} />
    );
  });

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
