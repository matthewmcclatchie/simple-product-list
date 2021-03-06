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

  @media (min-width: 30rem) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

/**
 * Component
 * @param {object} props // Destructured props
 */
const ArchiveTitle = ({
  action,
  children,
  filterDefault,
  filterOptions,
}) => (
  <Wrap>
    <Title as="h1">{children}</Title>

    {/* Display Select Component if filter options are passed */}
    { filterOptions && (
      <Select filterDefault={filterDefault} id="filterSizes" name="filterSizes" action={action} aria-label="Filter by size">
        <option value="label" disabled>Filter by size:</option>
        <option value="all">All sizes</option>
        { filterOptions.map(item => <option key={item} value={item}>{item}</option>) }
      </Select>
    ) }
  </Wrap>
);

/**
 * defaultProps
 */
ArchiveTitle.defaultProps = {
  action: () => null,
  filterOptions: null,
  filterDefault: 'all',
};

/**
 * PropTypes
 */
ArchiveTitle.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.string),
  filterDefault: PropTypes.string,
};

export default ArchiveTitle;
