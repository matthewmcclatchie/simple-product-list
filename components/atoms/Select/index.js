/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component
 * @param {object} props Destructured props
 */
const Select = ({
  action,
  children,
  filterDefault,
  id,
  name,
  ...rest
}) => {
  // If no children, return nothing.
  if (!children) return null;

  // Return Component.
  return (
    <select value={filterDefault} id={id} name={name} onChange={action} {...rest}>
      {children}
    </select>
  );
};

/**
 * defaultProps
 */
Select.defaultProps = {
  children: null,
  filterDefault: '',
  id: '',
  name: '',
};

/**
 * PropTypes
 */
Select.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
  filterDefault: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
