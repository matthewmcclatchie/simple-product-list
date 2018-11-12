/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Components
 */


/**
 * Styled Components
 */
const Wrap = styled.div`
  border: 1px solid gold;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  article {
    flex: 0 0 ${props => 100 / Math.round(props.perRow)}%;
  }
`;


/**
 * Component
 * @param {object} props
 */
const Articles = ({
  children,
  perRow,
}) => (
  <Wrap perRow={perRow}>
    {children}
  </Wrap>
);


/**
 * defaultProps
 */
Articles.defaultProps = {
  perRow: 1,
  children: null,
};


/**
 * PropTypes
 */
Articles.propTypes = {
  perRow: PropTypes.number,
  children: PropTypes.node,
};

export default Articles;
