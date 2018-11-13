/**
 * Dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Data
 */
import allProducts from '../services/products.json';
import getSizes from '../services/products';

/**
 * Layouts
 */
import Layout from '../layouts/main';

/**
 * Components
 */
import ArchiveTitle from '../components/molecules/ArchiveTitle';
import ArticleCard from '../components/molecules/ArticleCard';
import Articles from '../components/organisms/Articles';

/**
 * Styled Components
 */
const Wrap = styled.div`
  padding: 1rem;
`;

/**
 * Component
 */
const Index = ({ products, sizes }) => (
  <Layout>
    <Wrap>

      <ArchiveTitle filterOptions={sizes}>
        Women's Tops
      </ArchiveTitle>

      <Articles perRow={4}>
        {
          products.map(({
            isSale,
            isExclusive,
            price,
            productImage,
            productName,
            size,
          }) => (
            <ArticleCard
              key={productName}
              className="articleCard--Product"
              sale={isSale}
              exclusive={isExclusive}
              price={price}
              imageSrc={productImage}
              imageAlt={productName}
              title={productName}
              sizes={size}
            />
          ))
        }
      </Articles>
    </Wrap>
  </Layout>
);

Index.getInitialProps = async function IndexGIP() {
  return {
    products: allProducts,
    sizes: getSizes(allProducts),
  };
};

// Export
export default Index;
