import React from "react";
const Footer = () => {
  return (
    <footer className="page-footer #40c4ff light-blue accent-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
