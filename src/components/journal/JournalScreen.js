import React from "react";
import { Sidbar } from "./Sidbar";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidbar />
      <main>
        <h1>Main Content</h1>
      </main>
    </div>
  );
};
