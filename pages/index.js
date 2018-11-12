/**
 * Dependencies
 */
import React from 'react';

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
const Index = () => (
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

// Export
export default Index;
