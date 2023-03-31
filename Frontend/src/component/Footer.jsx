import React from "react";

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright © Your Website 2022
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://twitter.com/Abidyou04311331?t=Kxk6YaY2i8swIxdoKg7n5g&s=09"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.facebook.com/abidyousaf.abid.7?mibextid=ZbWKwL"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/in/abid-yousaf-80594523b/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#!">
              Privacy Policy
            </a>
            <a className="link-dark text-decoration-none" href="#!">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
