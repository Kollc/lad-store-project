import { FormEvent, useState } from "react";
import MainLayout from "../../main-layout/main-layout";
import style from "./sign-in-page.module.scss";

function SignInPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitFormHandle = (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <MainLayout>
      <section className={style.signIn}>
        <form onSubmit={submitFormHandle}>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <button type="submit">Отправить</button>
        </form>
      </section>
    </MainLayout>
  );
}

export default SignInPage;
