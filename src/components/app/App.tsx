import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import SignUpPage from "../pages/sign-up-page/sign-up-page";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="*" element={<div>Error page 404</div>} />
    </Routes>
  );
}

export default App;
