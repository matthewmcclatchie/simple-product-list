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
  ${({ theme }) => (`
    border-left: 1px solid ${theme.palette.primary.lightGrey};
    border-top: 1px solid ${theme.palette.primary.lightGrey};
  `)}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 81.25rem;

  article {
    display: flex;
    flex: 0 0 100%;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 30rem) {
      flex: 0 0 50%;
    }

    @media (min-width: 50rem) {
      flex: 0 0 ${props => 100 / Math.round(props.perRow)}%;
    }
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
