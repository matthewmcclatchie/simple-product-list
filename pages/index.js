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
import ArticleCard from '../components/molecules/ArticleCard';

/**
 * Component
 */
const Index = () => (
  <Layout>
    <ArticleCard
      imageAlt="Striped shirt"
      imageSrc="https://picsum.photos/280/280"
      price="$15.00"
      title="Striped shirt"
      sale
    />
  </Layout>
);

// Export
export default Index;
