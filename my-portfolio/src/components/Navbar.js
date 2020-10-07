import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Maria Betancourt
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              About <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
