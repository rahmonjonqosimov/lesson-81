import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <p>
            Finstreet 118 2561 Fintown <br />
            Hello@finsweet.com 020 7993 2905
          </p>
          <ul>
            <li>
              <Link target="_blank" href={"https://www.facebook.com/"}>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link target="_blank" href={"https://x.com/"}>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link target="_blank" href={"https://www.instagram.com/"}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link target="_blank" href={"https://www.linkedin.com/"}>
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
