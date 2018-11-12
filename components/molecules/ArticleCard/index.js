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
import Title from '../../atoms/Title';

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
const ArticleCard = ({
  imageAlt,
  imageSrc,
  price,
  title,
  sale,
  exclusive,
}) => (
  <Wrap>
    <div>
      <img src={imageSrc} alt={imageAlt} />
    </div>

    <Header>
      {/*
        Ternary operators with empty negative condition.
        Will only show Component if boolean value is true.
      */}
      { sale && <Alert type="sale">Sale</Alert> }
      { exclusive && <Alert type="exclusive">Exclusive</Alert> }

      <div>
        <Title as="h1">{title}</Title>
        <Title as="h2">{price}</Title>
      </div>
    </Header>
  </Wrap>
);


/**
 * defaultProps
 */
ArticleCard.defaultProps = {
  imageAlt: null,
  imageSrc: null,
  price: null,
  title: null,
  sale: false,
  exclusive: false,
};


/**
 * PropTypes
 */
ArticleCard.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  sale: PropTypes.bool,
  exclusive: PropTypes.bool,
};

export default ArticleCard;
