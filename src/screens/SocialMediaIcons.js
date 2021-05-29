import React from "react";
import "./SocialMediaIcons.css";

function SocialMediaIcons() {
  return (
    <section>
      <ul class="sci">
        <li>
          <a href="#">
            <img src={require("../assests/images/facebook.png").default}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../assests/images/twitter.png").default} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../assests/images/instagram.png").default} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SocialMediaIcons;
