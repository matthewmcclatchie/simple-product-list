/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

/**
 * Theme
 */
import primary from './theme';

/**
 * Component
 * @param {object} children
 */
const Layout = ({ children }) => (
  <React.Fragment>
    <Normalize />
    <ThemeProvider theme={primary}>
      {children}
    </ThemeProvider>
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
