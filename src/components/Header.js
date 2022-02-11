import react from "react";
import { ReactComponent as LogoHeader } from "../images/waves welcome.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./style/Header.css";

function Header() {
  return (
    <div style={{ width: "100%" }}>
      {/* <div style={{display:'absolute'}}> */}
      <div id="fixedimg">
        <LogoHeader width="100%" height="100%" />
        <div id="main-icons">
          <div id="menu">
            <FontAwesomeIcon size="2x" color="white" icon={solid("bars")} />
          </div>
          <div>
            {/* <FontAwesomeIcon id="shoppingCard2" icon={solid("cart-shopping")} /> */}
          </div>
          <div>
            {" "}
            <FontAwesomeIcon id="shoppingCard" icon={solid("cart-shopping")} />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default Header;
