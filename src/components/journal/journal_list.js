import React from "react";
import { JournalEntry } from "./journal_entry";

export const JournalList = () => {
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
