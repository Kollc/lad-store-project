import { signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../consts";
import { useAppSelector } from "../../hooks/store-hooks";
import { auth } from "../../services/firebase/firebase-user-auth";
import { getProductsInCart } from "../../store/cart-process/selector";
import { getUserData } from "../../store/user-process/selector";
import style from "./header.module.scss";
import MobileMenu from "./mobile-menu/mobile-menu";

function Header(): JSX.Element {
  const user = useAppSelector(getUserData);
  const productsInCart = useAppSelector(getProductsInCart);
  const location = useLocation();

  const clickLogoutHandle = async () => {
    await signOut(auth);
  };

  return (
    <div className="background-wrapper">
      <section className={`${style.header} container`}>
        <div className={style.logo}>
          <Link to="/">
            <span>Lad</span>Store
          </Link>
        </div>
        <nav className={style.menu}>
          <ul>
            <li>
              <Link
                className={
                  location.pathname === AppRoutes.Main ? style.activeLink : ""
                }
                to="/"
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === AppRoutes.Shop ? style.activeLink : ""
                }
                to="/shop"
              >
                Shop
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.userMenu}>
          <ul>
            <li className={style.basket}>
              <Link to="/cart">
                <svg fill="#724cf9" width="20" height="20">
                  <use href="#icon-basket" />
                </svg>
              </Link>
              <span className={style.counter}>
                {Object.keys(productsInCart).length}
              </span>
            </li>
            {user.email ? (
              <>
                <li className={style.userEmail}>
                  <a>{user.email}</a>
                </li>
                <li>
                  <a className={style.logout} onClick={clickLogoutHandle}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/sign-up">Sing Up</Link>
              </li>
            )}
          </ul>
        </div>

        <MobileMenu clickLogoutHandle={clickLogoutHandle}/>
      </section>
    </div>
  );
}

export default Header;
