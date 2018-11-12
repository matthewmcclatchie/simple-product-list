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
  display: inline-block;
  padding: 1rem;

  /* If 'type' prop is equal to sale */
  ${props => props.type === 'sale' && css`
    background: rgb(189, 63, 59);
  `}

  /* If 'type' prop is equal to sale */
  ${props => props.type === 'exclusive' && css`
    background: rgb(68, 150, 42);
    color: rgb(255, 255, 255);
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
