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
  ${({ theme }) => (`
    border: 1px solid ${theme.palette.primary.lightGrey};
  `)}
  
  padding: 0.625rem;
`;

const HeaderDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  div {
    flex: 0 1 auto;
  }

  h2, h3 {
    margin: 0;
  }

  h2 {
    padding-right: 0.75rem;
  }

  @media (min-width: 64rem) {
    h3 {
      font-size: 2.25rem;
    }
  }
`;

const Image = styled.img`
  margin: 0 auto 0.5rem auto;
`;

const Anchor = styled.a`
  color: inherit;
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  text-decoration: none;
`;

/**
 * Component
 * @param {object} props // Destructured props
 */
const ArticleCard = ({
  imageAlt,
  imageSrc,
  price,
  title,
  sale,
  exclusive,
}) => (
  <Wrap itemScope itemType="http://schema.org/Product">
    <Anchor href="#">
      <Image src={`/static/images/${imageSrc}`} alt={imageAlt} itemProp="image" />

      <header>
        {/* Conditional rendering will only show Component if boolean value is true. */}
        { sale && <Alert type="sale">Sale</Alert> }
        { exclusive && <Alert type="exclusive">Exclusive</Alert> }

        <HeaderDetails>
          <div>
            <Title as="h2" itemProp="name">{title}</Title>
          </div>

          <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
            <meta itemProp="priceCurrency" content="AUD" />
            <Title as="h3">
              {/* Added regex to convert price to Number (removing currency symbol). This would be handy when working with actual prices. */}
              <data itemProp="price" value={Number(price.replace(/[^0-9.]+/g, ''))}>{price}</data>
            </Title>
          </div>
        </HeaderDetails>
      </header>

    </Anchor>
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
