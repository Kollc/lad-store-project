import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import style from "./sign-up-page.module.scss";

function SignUpPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");

  const submitFormHandle = async (evt: FormEvent) => {
    evt.preventDefault();
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
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Confim password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
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
