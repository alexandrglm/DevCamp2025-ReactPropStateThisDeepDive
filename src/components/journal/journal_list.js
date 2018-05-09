import React, { Component } from "react";
import { JournalEntry } from "./journal_entry";

export default class JournalList extends Component {
  constructor() {
    super();

    const rawJournalData = [
      { title: "Post One", content: "Post content", status: "draft" },
      { title: "Post Two", content: "More content", status: "published" },
      { title: "Post Three", content: "More content", status: "published" },
      { title: "Post Four", content: "More content", status: "published" }
    ];

    this.state = {
      journalData: rawJournalData,
      heyyyyyy: "The Fonze"
    };
  }

  handleClick = e => {
    console.log(e);
  };

  render() {
    const journalEntries = this.state.journalData.map(journalEntry => {
      return (
        <div key={journalEntry.title}>
          <JournalEntry
            title={journalEntry.title}
            content={journalEntry.content}
          />
        </div>
      );
    });

    return (
      <div>
        <h2>{this.state.heyyyyyy}</h2>
        {journalEntries}
        <button onClick={e => this.handleClick(e)}>Toggle Status</button>
      </div>
    );
  }
}
