/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/**
 * Styled Components
 */

/**
 * Component
 * @param {object} props
 */
const Select = ({
  action,
  children,
  defaultValue,
  id,
  name,
}) => {
  // If no children, return nothing.
  if (!children) return null;

  return (
    <select defaultValue={defaultValue} id={id} name={name} onChange={action}>
      {children}
    </select>
  );
};

/**
 * defaultProps
 */
Select.defaultProps = {
  children: null,
  defaultValue: '',
  id: '',
  name: '',
};

/**
 * PropTypes
 */
Select.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
