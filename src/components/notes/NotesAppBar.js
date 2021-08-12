import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  return (
    <div className="notes__appbar">
      <span>6 Agosto 2021</span>
      <div>
        <button className="btn">Imagen</button>
      </div>

      <div>
        <button className="btn" onClick={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  );
};
