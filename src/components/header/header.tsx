import { Link } from "react-router-dom";
import style from "./header.module.scss";
import cartIcon from "./imagen/cart.svg";

function Header(): JSX.Element {
  return (
    <div className="container">
      <section className={style.header}>
        <div className={style.logo}>
          <Link to='/'><span>Lad</span>Store</Link>
        </div>
        <nav className={style.menu}>
          <ul>
            <li>
              <Link to='/'>Main</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </nav>
        <div className={style.userMenu}>
          <ul>
            <li>
              <a>
                <svg fill="#724cf9" width="20" height="20">
                  <use href="#icon-search" />
                </svg>
              </a>
            </li>
            <li className={style.basket}>
              <a>
                <svg fill="#724cf9" width="20" height="20">
                  <use href="#icon-basket" />
                </svg>
              </a>
              <span className={style.counter}>0</span>
            </li>
            <li>
              <Link to='/sign-in'>Log in</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Header;
