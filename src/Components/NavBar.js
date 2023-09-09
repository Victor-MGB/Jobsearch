import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles//NavBar.css"; // Import your custom CSS file

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
            Collapse
        </NavLink>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div id="navbarSupportedContent" className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/Create" className="nav-link">
                Create Record
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
