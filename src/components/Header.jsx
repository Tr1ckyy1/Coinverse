import { Link } from "react-router-dom";
import { useSection } from "../Context";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const { scrollToSection, marketRef, chooseUsRef, joinRef } = useSection();
  const [navOpened, setNavOpened] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const { ref, inView, entry } = useInView({
    root: null,
    threshold: 0,
  });

  return (
    <header ref={ref}>
      <nav className={`navbar ${inView ? "" : "fixed-navbar"}`}>
        <Link onClick={scrollToTop} className="main-title" to="/">
          COINVERSE
        </Link>
        <div className="middle-title">
          <Link onClick={scrollToTop} to="/">
            Home
          </Link>
          <Link onClick={() => scrollToSection(marketRef)} to="/">
            Market
          </Link>
          <Link onClick={() => scrollToSection(chooseUsRef)} to="/">
            Choose Us
          </Link>
          <Link onClick={() => scrollToSection(joinRef)} to="/">
            Join
          </Link>
        </div>
        <div className="socials">
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-discord"></i>
          </span>
        </div>
        <div onClick={() => setNavOpened(true)} className="mobile-navbar">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className={`overlay ${navOpened ? "opened" : ""}`}>
        <span onClick={() => setNavOpened(false)} className="close-overlay">
          <AiOutlineClose />
        </span>
        <div className="mobile-nav-links">
          <Link
            onClick={() => {
              setNavOpened(false);
              scrollToTop();
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setNavOpened(false);
              scrollToSection(marketRef);
            }}
            to="/"
          >
            Market
          </Link>
          <Link
            onClick={() => {
              setNavOpened(false);
              scrollToSection(chooseUsRef);
            }}
            to="/"
          >
            Choose Us
          </Link>
          <Link
            onClick={() => {
              setNavOpened(false);
              scrollToSection(joinRef);
            }}
            to="/"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
