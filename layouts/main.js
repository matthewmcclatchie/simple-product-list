/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/**
 * Theme
 */
import theme from './theme';

/**
 * Global styles
 */
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    /* theme variable here relates to import on line 12, as technically the theme is set on the ThemeProvider */
    font-family: ${theme.fonts.primary};
    font-size: 1rem;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

/**
 * Component
 * @param {object} children
 */
const Layout = ({ children }) => (
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <div>
        {children}
      </div>
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
