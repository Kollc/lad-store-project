import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes, ErrorMessagesFirebase } from "../../../consts";
import { useAppDispatch, useAppSelector } from "../../../hooks/store-hooks";
import { auth } from "../../../services/firebase/firebase-user-auth";
import { getUserError } from "../../../store/user-process/selector";
import {
  resetUserError,
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
  const error = useAppSelector(getUserError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");
  const naviagte = useNavigate();

  const submitFormHandle = async (evt: FormEvent) => {
    evt.preventDefault();

    if (password === confimPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(setUserData({ email: user.email }));
          dispatch(setAuthorizationStatus(AuthorizationStatusList.Auth));
          naviagte(AppRoutes.Shop);
        })
        .catch((error) => {
          dispatch(setAuthorizationStatus(AuthorizationStatusList.NoAuth));
          dispatch(setUserError(ErrorMessagesFirebase.get(error.code)));
        });
    } else {
      dispatch(setUserError(ErrorMessagesFirebase.get("passwordNotConfim")));
    }

    dispatch(resetUserError());
  };

  return (
    <MainLayout>
      <section className={`${style.signUp} container`}>
        <PageTitle title="Sign Up" />
        <form onSubmit={submitFormHandle}>
          <input
            name="email"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <input
            name="confimPassword"
            type="password"
            value={confimPassword}
            placeholder="Confim password"
            onChange={(evt) => setConfimPassword(evt.target.value)}
          />
          <span className={style.error}>{error}</span>
          <p className={style.registerLink}>
            Already registered? <Link to="/sign-in">Login</Link>
          </p>
          <button type="submit">Sign up</button>
        </form>
      </section>
    </MainLayout>
  );
}

export default SignUpPage;
