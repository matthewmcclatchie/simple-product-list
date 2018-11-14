/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  opacity: 0;
  transition: opacity 0.1s ease-in;

  &.loaded {
    opacity: 1;
  }

  article {
    flex: 0 0 100%;

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
 * @param {object} props // Destructure props
 */
const Articles = ({
  children,
  className,
  perRow,
}) => (
  <Wrap perRow={perRow} className={className}>
    {children}
  </Wrap>
);

/**
 * defaultProps
 */
Articles.defaultProps = {
  className: '',
  perRow: 1,
  children: null,
};

/**
 * PropTypes
 */
Articles.propTypes = {
  className: PropTypes.string,
  perRow: PropTypes.number,
  children: PropTypes.node,
};

export default Articles;
