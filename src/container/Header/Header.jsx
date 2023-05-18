import React from "react";

import images from "../../constants/images";
import "./Header.css";
import Subheading from "../../components/SubHeading/Subheading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <Subheading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        laborum obcaecati labore ipsam ut odio nostrum optio magnam ducimus in
        explicabo architecto fuga laudantium, iusto voluptate hic aliquam fugiat
        quibusdam.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__header-img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
