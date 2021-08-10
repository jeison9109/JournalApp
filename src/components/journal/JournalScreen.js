import React from "react";
import { NoteScreen } from "../notes/NoteScreen";
//import { NothingSelected } from "./NothingSelected";
import { Sidbar } from "./Sidbar";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidbar />
      <main>
        {/** <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};
