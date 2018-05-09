import React, { Component } from "react";

class JournalEntry extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

const journalData = [
  <JournalEntry title="Post One" content="Post content" />,
  <JournalEntry title="Post Two" content="More content" />
];

const JournalList = () => {
  // const journalEntries = journalData.map(journalEntry => {
  //   <div key={journalEntry.title}>
  //     <h2>{journalEntry.title} h2</h2>
  //     <p>{journalEntry.content} p</p>
  //   </div>;
  // });
};

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State Deep Dive</h1>
        <JournalEntry title="Post One" content="Post content" />
        <JournalEntry title="Post Two" content="More content" />
      </div>
    );
  }
}
