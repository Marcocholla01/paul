/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin size={20} />
      </a>
      <a href="http://github.com" target="_blank">
        <BsGithub size={20} />
      </a>
      <a href="http://twitter.com" target="_blank">
        <FaSquareTwitter size={20} />
      </a>
    </div>
  );
}

export default HeaderSocials;
