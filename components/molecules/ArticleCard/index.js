/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Components
 */
import Alert from '../../atoms/Alert';

/**
 * Styled Components
 */
const Wrap = styled.article`
  border: 1px solid red;
`;

const Header = styled.header`
  border: 1px solid blue;
`;

/**
 * Component
 * @param {object} props
 */
const ArticleCard = ({ text }) => (
  <Wrap>

    <Header>
      <div>
        <Alert type="exclusive">Exclusive</Alert>
      </div>

      <p>{text}</p>
    </Header>

  </Wrap>
);


/**
 * defaultProps
 */
ArticleCard.defaultProps = {
  text: '',
};


/**
 * PropTypes
 */
ArticleCard.propTypes = {
  text: PropTypes.string,
};

export default ArticleCard;
