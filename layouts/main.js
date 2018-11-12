/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

/**
 * Component
 * @param {object} children
 */
const Layout = ({ children }) => (
  <React.Fragment>
    <Normalize />
    {children}
  </React.Fragment>
);

/**
 * defaultProps
 */
Layout.defaultProps = {
  children: null,
};

/**
 * PropTypes
 */
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
