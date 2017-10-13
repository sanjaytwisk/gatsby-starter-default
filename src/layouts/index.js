import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navigation from '../components/Navigation';

import '../styles/all.css';

const pages = [
    {
        url: '',
        title: 'Home'
    },
    {
        url: '/contact',
        title: 'Contact'
    }
];

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby starter fork"
      meta={[
        { name: 'description', content: 'Gatsby starter fork' },
        { name: 'keywords', content: 'gatsby, starter, fork' },
      ]}
    />
    <Navigation links={pages} />
    <main className="page">
      {children()}
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;
