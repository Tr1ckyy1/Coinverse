import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-socials">
        <span>
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span>
          <i className="fa-brands fa-discord"></i>
        </span>
        <span>
          <i className="fa-brands fa-facebook"></i>
        </span>
        <span>
          <i className="fa-brands fa-youtube"></i>
        </span>
      </div>
      <div className="terms">
        <p>Privacy</p>
        <p>Terms of Use</p>
      </div>
      <div className="design">
        <p>Design by</p>
        <Link target="_blank" to="https://github.com/stefvndev">
          Stefndv
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
