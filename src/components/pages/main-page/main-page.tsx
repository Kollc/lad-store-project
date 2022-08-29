import { Link } from "react-router-dom";
import MainLayout from "../../main-layout/main-layout";
import style from "./main-page.module.scss";

function MainPage(): JSX.Element {
  return (
    <section>
      <MainLayout>
        <section className={style.main}>
          <div className={style.content}>
            <h1>
              <span>Lad</span>Store
            </h1>
            <p className={style.market}>LadStore Online Ordering</p>
            <p className={style.feature}>Your <span>best</span> purchases quickly <span>and</span> efficiently</p>
            <Link to='/shop'>Order Now</Link>
          </div>
        </section>
      </MainLayout>
    </section>
  );
}

export default MainPage;
