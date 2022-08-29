import style from "./footer.module.scss";
import facebookIcon from "./images/facebook.png";
import instaIcon from "./images/insta.png";
import twitterIcon from "./images/twitter.png";
import youtubeIcon from "./images/youtube.png";

function Footer(): JSX.Element {
  return (
    <div className="background-wrapper">
      <footer className={`${style.footer} container`}>
        <div className={style.linksList}>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a>Catalog</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <a>Terms & conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Disclaimer</a>
              </li>
            </ul>
          </div>
          <div className={style.media}>
            <h3>Social media</h3>
            <ul>
              <li>
                <a href="https://facebook.com/">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <img src={instaIcon} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <img src={youtubeIcon} alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={style.copyright}>
          <p>COPYRIGHT © 2022 LAD INC. | ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
