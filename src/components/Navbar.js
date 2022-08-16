import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar({ cart, searchItems, searchInput }) {
  return (
    <nav class="navbar navbar-expand-xl my-nav">
      <div class="container">
        <a class="navbar-brand">
          <i class="bi bi-cart-check-fill"></i> ECOMKART
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link px-3 py-2 mx-2 " aria-current="page" to="/">
                HOME
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="btn btn-primary text-black btn-cart nav-link px-3 py-2 mx-2"
                type="submit"
                to="/cart"
              >
                Cart <i class="bi bi-cart-check-fill"></i>
                <span> {cart.length}</span>
              </Link>
            </li>
          </ul>

          <div className="ms-auto">
            <input
              icon="search"
              class="form-control mt-3 mb-3"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
