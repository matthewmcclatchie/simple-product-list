/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

/**
 * Styled Components
 */
const Wrap = styled.div`
  color: rgb(255, 255, 255);
  display: inline-block;
  padding: 1rem;

  /* If 'type' prop is equal to sale */
  ${({ type, theme }) => type === 'sale' && css`
    background: ${theme.palette.highlight.red};
  `}

  /* If 'type' prop is equal to exclusive */
  ${({ type, theme }) => type === 'exclusive' && css`
    background: ${theme.palette.highlight.green};
  `}
`;

/**
 * Component
 * @param {object} props
 */
const Alert = ({ children, type }) => {
  if (children) {
    return (
      <Wrap type={type}>
        {children}
      </Wrap>
    );
  }

  return null;
};

/**
 * defaultProps
 */
Alert.defaultProps = {};

/**
 * PropTypes
 */
Alert.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
