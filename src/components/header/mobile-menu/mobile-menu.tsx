import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../../consts";
import { useAppSelector } from "../../../hooks/store-hooks";
import { getProductsInCart } from "../../../store/cart-process/selector";
import { getUserData } from "../../../store/user-process/selector";
import style from "./mobile-menu.module.scss";
import { useState } from "react";

type MobileMenuProps = {
  clickLogoutHandle: () => void;
};

const MobileMenu = ({ clickLogoutHandle }: MobileMenuProps): JSX.Element => {
  const location = useLocation();
  const user = useAppSelector(getUserData);
  const productsInCart = useAppSelector(getProductsInCart);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div
        className={`${style.burgerMenu}  ${openMenu ? style.menuOpenIcon : ""}`}
        onClick={() => setOpenMenu(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={style.background}
        style={{ display: openMenu ? "block" : "none" }}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div
        className={style.mobileMenu}
        style={{ display: openMenu ? "block" : "none" }}
      >
        <h2>{user.email}</h2>
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
          <li className={style.basket}>
            <Link to="/cart">Корзина:</Link>
            <span className={style.counter}>
              {Object.keys(productsInCart).length}
            </span>
          </li>
          {user.email ? (
            <>
              <li className={style.userMenu}>
                <a className={style.logout} onClick={clickLogoutHandle}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <li className={style.userMenu}>
              <Link to="/sign-up">Sing Up</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
