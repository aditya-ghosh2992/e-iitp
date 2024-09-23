import React from "react";
import "./Footer.css"; // Import your CSS file
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const linksList = [
    { title: "About IITP", href: "https://cet.iitp.ac.in/index.php/the-institute", target: "_blank" },
    { title: "IIT Patna Website", href: "https://cet.iitp.ac.in/", target: "_blank" },
    { title: "AD portal", href: "https://academics.iitp.ac.in/", target: "_blank" },
    { title: "Moodle", description: "Hall Management Center", href: "https://cet.iitp.ac.in/moodle/", target: "_blank" },
    { title: "Library", href: "https://library.iitp.ac.in/", target: "_blank" },
    { title: "News", href: "https://cet.iitp.ac.in/index.php/announcements/news", target: "_blank" },
    { title: "Notice", href: "https://cet.iitp.ac.in/index.php/announcements/notice", target: "_blank" },
    { title: "AC", href: "https://cet.iitp.ac.in/index.php/academics/academic-calendar", target: "_blank" },
  ];

  return (
    <footer>
      <div className="footerContainer">
        <div className="tsgContainer">
          <div className="tsgDescription">
            <h2 className="tsgHeading">IIT Patna's E-Gymkhana</h2>
            <p className="address">
              Indian Institute of Technology Patna,<br />
              Main Road, Amhara, Bihta-801106
            </p>
          </div>
          <div className="iconsContainer">
            <a target="_blank" href="https://www.facebook.com/iitp.ac.in/" rel="noreferrer"><FaFacebook /></a>
            <a target="_blank" href="https://github.com/" rel="noreferrer"><FaGithub /></a>
            <a target="_blank" href="https://www.youtube.com/@iitpatna" rel="noreferrer"><FaYoutube /></a>
            <a target="_blank" href="https://www.instagram.com/iit_patna_official/?hl=en" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="linksContainer">
          {linksList.map((link, index) => (
            <p key={index}>
              <a target={link.target} href={link.href} rel="noreferrer">{link.title}</a>
              {link.description ? <span className="tooltip">{link.description}</span> : null}
            </p>
          ))}
        </div>
        <div className="contactSection">
          <span>We're here</span>
          <span>Let's talk</span>
          <a href="/register">
            <button className="contactButton">Get in Touch</button>
          </a>
        </div>
      </div>
      <div className="footerLine"></div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} IIT Patna. All rights reserved.
      </div>
    </footer>
  );
}
