import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const renderLink = link => (
    <li className="navigation__link" key={link.title}>
        <Link to={link.url}>{link.title}</Link>
    </li>
);

const Navigation = ({ links }) => (
    <nav className="navigation">
        <ul className="navigation__links">
            {links.map(renderLink)}
        </ul>
    </nav>
);

Navigation.propTypes = {
    links: PropTypes.array
};

export default Navigation;
