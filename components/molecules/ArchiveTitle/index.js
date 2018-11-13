/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Components
 */
import Select from '../../atoms/Select';
import Title from '../../atoms/Title';

/**
 * Styled Components
 */
const Wrap = styled.header`
  ${({ theme }) => (`
    background-color: ${theme.palette.primary.lightBlue};
  `)}

  margin-bottom: 1rem;
  overflow: hidden;
  padding: 0.5rem;

  h1 {
    margin: 0;
  }

  @media (min-width: 40rem) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

/**
 * Component
 * @param {object} props
 */
const ArchiveTitle = ({ children, filterOptions }) => (
  <Wrap>
    <div>
      <Title as="h1">{children}</Title>
    </div>

    <div>
      <Select defaultValue="label" id="filterSizes" name="filterSizes">
        <option value="label" disabled>Filter by size:</option>
        <option value="all">All sizes</option>
        { filterOptions.map(item => <option key={item} value="item">{item}</option>) }
      </Select>
    </div>
  </Wrap>
);

/**
 * defaultProps
 */
ArchiveTitle.defaultProps = {};

/**
 * PropTypes
 */
ArchiveTitle.propTypes = {};

export default ArchiveTitle;
