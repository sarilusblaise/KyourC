import React from "react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

const navLinks = [
  { href: "/quote", label: "quote" },
  { href: "/celebrities", label: "celebrities" },
  { href: "/prisma", label: "prisma" },
  { href: "/quotes", label: "quotes" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-2">
      <div className="navbar px-8 max-w-6xl mx-auto ">
        {/* stack toggle menu for sm screen */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link) => {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="capitalize font-bold mt-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost text-xl text-gradient-to-r from-purple-400 via-pink-500 to-red-500 "
          >
            <h1>
              <span className="text-secondary">K</span>
              <span className="text-info">your</span>
              <span className="text-primary">C</span>
            </h1>
          </Link>
        </div>

        {/* horizontal menu for lg screen */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href} className="capitalize font-bold">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* theme toggler */}
        <div className="navbar-end">
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
