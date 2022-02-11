import { ReactComponent as LogoHeader } from "../images/waves welcome.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  solid,
  //   regular,
  //   brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./style/Header.css";

function Header(props) {
  return (
    <div style={{ width: "100%" }}>
      <div id="fixedimg">
        <LogoHeader width="100%" height="100%" />
        <div id="main-icons">
          <div id="menu">
            <FontAwesomeIcon size="2x" color="white" icon={solid("bars")} />
          </div>
          <div>{/* here i will add a new center header button */}</div>
          {props.showcart ? (
            <div>
              <Link to="/shopping-cart">
                <FontAwesomeIcon
                  id="shoppingCard"
                  icon={solid("cart-shopping")}
                />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
