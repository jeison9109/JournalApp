import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotesAppBar } from "./NotesAppBar";
import { useForm } from "../hooks/useForm";
import { activeNote } from "../actions/notes";

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const { body, title } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Ingreso un titulo"
          className="notes__title-input"
          name="title"
          value={title}
          onChange={handleInputChange}
        ></input>

        <textarea
          placeholder="Que paso Hoy?"
          className="notes__textarea"
          autoComplete="off"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__imge">
            <img
              src="data:image/jpeg;base64,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"
              alt="imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};
