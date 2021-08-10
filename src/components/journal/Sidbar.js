import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidbar = () => {
  return (
    <aside className="journal__sidbar">
      <div className="journal__sidbar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> Yeison Serna</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">Nuevo evento</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
