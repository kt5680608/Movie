import React, { useRef, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";

import logo from "../../assets/tmovie.png";
import { cleanup } from "@testing-library/react";

const headerNav = [
    {
        display: "Home",
        path: "/",
    },
    {
        display: "Movies",
        path: "/movie",
    },
    {
        display: "TV series",
        path: "/tv",
    },
];
function Header() {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        };
        window.addEventListener("scroll", shrinkHeader);
        return () => {
            window.removeEventListener("scroll", shrinkHeader);
        };
    }, []);
    const active = headerNav.findIndex((e) => e.path === pathname);
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">tMovies</Link>
                </div>
                <ul className="header__nav">
                    {headerNav.map((e, i) => (
                        <li
                            key={i}
                            className={`${i === active ? "active" : ""}`}
                        >
                            <Link to={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
