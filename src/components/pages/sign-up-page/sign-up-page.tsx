import { FormEvent, useState } from "react";

function SignUpPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitFormHandle = async (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <section>
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
  );
}

export default SignUpPage;
