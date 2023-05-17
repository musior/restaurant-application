import React from "react";

import images from "../../constants/images";
import "./Header.css";
import Subheading from "../../components/SubHeading/Subheading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <Subheading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
    </div>

    <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
