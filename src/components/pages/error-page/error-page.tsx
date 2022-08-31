import { Link } from "react-router-dom";
import MainLayout from "../../main-layout/main-layout";
import style from "./error-page.module.scss";

function ErrorPage(): JSX.Element {
  return (
    <MainLayout>
      <section className={style.errorPage}>
        <div className={style.content}>
          <h1>
            <span>404</span> Page Not Found
          </h1>
          <Link to="/">Go to main page</Link>
        </div>
      </section>
    </MainLayout>
  );
}

export default ErrorPage;
