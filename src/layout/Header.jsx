import React from 'react';
const Header = () => {
    return (
        <nav className="#0277bd light-blue darken-3">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    React Movies
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Header;
