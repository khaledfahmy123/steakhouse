import React, { useState, useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import { TabContext } from "./lpage.js";
import "./css/nav.css";
import useWindowSize from "./hooks/useWindowSize.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const tabs = ["home", "about", "menu", "contact"];

const Nav = (props) => {
  const [showLinks, setShowLinks] = useState(false);
  const { active_Tab, tab } = useContext(TabContext);

  const barBtn = useRef(null);
  const ul = useRef(null);

  const change = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    close();
    return active_Tab(e.target.classList[0]);
  };

  const toggle = () => {
    if (!showLinks) {
      ul.current.style.width = "100%";
    } else {
      ul.current.style.width = "0";
    }
    return setShowLinks(!showLinks);
  };

  const close = () => {
    if (window.innerWidth <= 700) {
      ul.current.style.width = "0";
    }
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if (window.innerWidth >= 700) {
      ul.current.style.width = "100%";
    }
  }, [useWindowSize()]);

  return (
    <>
      <nav>
        <a href="#">Steak House</a>

        <ul ref={ul}>
          <button className="close" onClick={() => close()}>
            X
          </button>
          {tabs.map((e, i) => (
            <li
              key={i}
              className={e == tab ? e + " active" : e}
              onClick={(e) => change(e)}
            >
              {e}
            </li>
          ))}
        </ul>

        <button className="btn">book a table</button>
        <button
          className="btn bar-btn clicked"
          ref={barBtn}
          onClick={() => toggle()}
        >
          <FontAwesomeIcon className="icon" icon={faBars}></FontAwesomeIcon>
        </button>
      </nav>
    </>
  );
};

export default Nav;
