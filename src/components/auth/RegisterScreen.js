import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../actions/ui";
import { startRegisterWithEmaiPasswordName } from "../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Matias",
    email: "matias@gmail.com",
    password: "12345",
    password2: "12345",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmaiPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Nombre requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email No valido"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Minimo 5 caracteres"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register Screen</h3>

      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-erro">{msgError}</div>}

        <input
          type="text"
          placeholder="name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="confirm"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>

        <Link to="/auth/login" className="link">
          Complete su registo
        </Link>
      </form>
    </>
  );
};
