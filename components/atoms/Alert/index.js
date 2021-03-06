/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

/**
 * Styled Components
 */
const Wrap = styled.b`
  ${({ theme }) => (`
    color: ${theme.palette.primary.white};
  `)}

  display: inline-block;
  padding: 1rem;

  /* If 'type' prop is equal to sale */
  ${({ type, theme }) => type === 'sale' && css`
    background: ${theme.palette.highlight.red};
  `}

  /* If 'type' prop is equal to exclusive */
  ${({ type, theme }) => type === 'exclusive' && css`
    background: ${theme.palette.highlight.green};
    padding: 1rem 2rem;
  `}

  /* Override default bolding of text in this instance */
  b {
    font-weight: 300;
  }
`;

/**
 * Component
 * @param {object} props Destructured props
 */
const Alert = ({ children, type }) => {
  // If no children, return nothing.
  if (!children) return null;

  // Return Component.
  return (
    <Wrap type={type}>
      {children}
    </Wrap>
  );
};

/**
 * PropTypes
 */
Alert.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
