import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/store-hooks";
import { auth } from "../../../services/firebase/firebase-user-auth";
import {
  setAuthorizationStatus,
  setUserData,
  setUserError,
} from "../../../store/user-process/user-process";
import { AuthorizationStatusList } from "../../../types/type";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import style from "./sign-up-page.module.scss";

function SignUpPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const naviagte = useNavigate();

  const submitFormHandle = async (evt: FormEvent) => {
    evt.preventDefault();

    if (password === confimPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(setUserData({ email: user.email }));
          dispatch(setAuthorizationStatus(AuthorizationStatusList.Auth));
          naviagte("/");
        })
        .catch((error) => {
          dispatch(setAuthorizationStatus(AuthorizationStatusList.NoAuth));
          dispatch(setUserError(error.message));
        });
    } else {
      setErrorPassword("Пароли должны быть одинаковые!");
    }
  };

  return (
    <MainLayout>
      <section className={`${style.signUp} container`}>
        <PageTitle title="Sign Up" />
        <form onSubmit={submitFormHandle}>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <span>{errorEmail}</span>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <span>{errorPassword}</span>
          <input
            type="password"
            value={confimPassword}
            placeholder="Confim password"
            onChange={(evt) => setConfimPassword(evt.target.value)}
          />
          <span>{errorPassword}</span>
          <p className={style.registerLink}>
            Already registered? <Link to="/sign-in">Login</Link>
          </p>
          <button type="submit">Отправить</button>
        </form>
      </section>
    </MainLayout>
  );
}

export default SignUpPage;
