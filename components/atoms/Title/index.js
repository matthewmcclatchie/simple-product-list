/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Styled Components
 */
const Wrap = styled.h1`
  font-size: 1.4rem;
`;

/**
 * Component
 * @param {object} props Destructured props
 */
const Title = ({ as, children }) => {
  // If no children, return nothing.
  if (!children) return null;

  // Return Component.
  return (
    <Wrap as={as}>
      {children}
    </Wrap>
  );
};

/**
 * PropTypes
 */
Title.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Title;
