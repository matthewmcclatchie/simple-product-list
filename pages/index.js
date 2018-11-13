/**
 * Dependencies
 */
import React from 'react';

/**
 * Data
 */
import products from '../services/products.json';
import getSizes from '../services/products';
/**
 * Layouts
 */
import Layout from '../layouts/main';

/**
 * Components
 */
import Articles from '../components/organisms/Articles';
import ArticleCard from '../components/molecules/ArticleCard';

/**
 * Component
 */
const Index = props => (
  <Layout>
    <Articles perRow={4}>
      <ArticleCard
        className="articleCard--Product"
        imageAlt="Striped shirt"
        imageSrc="https://picsum.photos/280/280"
        price="$15.00"
        title="Striped shirt"
        sale
      />
      <ArticleCard
        className="articleCard--Product"
        imageAlt="Striped shirt"
        imageSrc="https://picsum.photos/280/280"
        price="$15.00"
        title="Striped shirt"
        sale
      />
      <ArticleCard
        className="articleCard--Product"
        imageAlt="Striped shirt"
        imageSrc="https://picsum.photos/280/280"
        price="$15.00"
        title="Striped shirt"
        sale
      />
      <ArticleCard
        className="articleCard--Product"
        imageAlt="Striped shirt"
        imageSrc="https://picsum.photos/280/280"
        price="$15.00"
        title="Striped shirt"
        sale
      />
      <ArticleCard
        className="articleCard--Product"
        imageAlt="Striped shirt"
        imageSrc="https://picsum.photos/280/280"
        price="$15.00"
        title="Striped shirt"
        sale
      />
    </Articles>
  </Layout>
);

Index.getInitialProps = async function IndexGIP() {
  return {
    sizes: getSizes(products),
  };
};

// Export
export default Index;
