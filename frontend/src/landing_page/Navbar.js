import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
          <a class="navbar-brand" href="#">
            <img src="media/images/logo.svg" alt="logo.svg" style={{width:"25%"}}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link text-muted fs-8 active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-muted fs-8 active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-muted fs-8 active" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-muted fs-8 active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-muted fs-8 active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
