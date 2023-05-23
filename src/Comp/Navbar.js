import React, { useState, useEffect } from "react";
import "../style/style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isSticky ? "navbar sticky" : "navbar"}>
      <div className="navbar__content">
        <h1>My Blog</h1>
        <ul>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> Posts</a>
          </li>
          <li>
            <a href="/"> About</a>
          </li>
          <li>
            <a href="/"> Contact</a>
          </li>
        </ul>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4CAF50", // Green background color
              borderRadius: "10px", // Border radius
              "&:hover": {
                backgroundColor: "#388E3C", // Darker green on hover
              },
            }}
          >
            Get Listed Today
          </Button>
        </Stack>
      </div>
    </nav>
  );
};

export default Navbar;
