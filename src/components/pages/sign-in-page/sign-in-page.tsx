import { FormEvent, useState } from "react";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import style from "./sign-in-page.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase/firebase-user-auth";
import { useNavigate } from "react-router-dom";
import {
  setAuthorizationStatus,
  setUserData,
  setUserError,
} from "../../../store/user-process/user-process";
import { useAppDispatch, useAppSelector } from "../../../hooks/store-hooks";
import { AuthorizationStatusList } from "../../../types/type";
import { getUserError } from "../../../store/user-process/selector";
import { ErrorMessagesFirebase } from "../../../consts";

function SignInPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(getUserError);

  const submitFormHandle = (evt: FormEvent) => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUserData({ email: user.email }));
        dispatch(setAuthorizationStatus(AuthorizationStatusList.Auth));
        naviagte("/");
      })
      .catch((error) => {
        dispatch(setAuthorizationStatus(AuthorizationStatusList.NoAuth));
        dispatch(setUserError(ErrorMessagesFirebase.get(error.code)));
      });
  };

  return (
    <MainLayout>
      <section className={`${style.signIn} container`}>
        <PageTitle title="Sign In" />
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
          <span className={style.error}>{error}</span>
          <button type="submit">Отправить</button>
        </form>
      </section>
    </MainLayout>
  );
}

export default SignInPage;
