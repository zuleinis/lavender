import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import "../app.css";

const pages = [
  { name: "Movies", href: "/movies" },
  { name: "TV Shows", href: "/tv-shows" },
  { name: "All", href: "/all" },
];

export const NavBar = () => {
  return (
    // Rubric Item: Advanced HTML5 (<nav> element)
    <nav className="nav-bar">
      <ul className="menu">
        <li>
          <a href="/" className="navbar-brand">
            The Lavender Frame
          </a>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <a href={page.href}>{page.name}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <a href="/profile">
            <PersonIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};
