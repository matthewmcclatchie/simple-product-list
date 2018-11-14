/**
 * Dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Data
 */
import allProducts from '../services/products.json';
import { getSizes, localStorageGet, localStorageSet } from '../services/products';

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
class Index extends React.Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      displaySizes: 'all',
      loaded: false,
    };
  }

  /**
   * Lifecycle method
   */
  componentDidMount() {
    const cachedHits = localStorageGet('size');
    if (cachedHits) {
      this.setState({ displaySizes: cachedHits });
    }

    this.setState({
      loaded: true,
    });
  }

  /**
   * Define function to be fired by Child Component
   * @param {object} event Trigger event
   */
  handler(event) {
    this.setState({
      displaySizes: event.target.value,
    });

    localStorageSet('size', event.target.value);
  }

  /**
   * Lifecycle method
   * Add handler function as action to Child Component
   */
  render() {
    // Destructuring
    const { props, state } = this;

    return (
      <Layout>
        <Wrap>
          <ArchiveTitle filterOptions={props.sizes} action={this.handler} filterDefault={state.displaySizes}>
            {"Women's Top"}
          </ArchiveTitle>

          <Articles perRow={4} className={state.loaded ? 'loaded' : ''}>
            {
              props.products.filter((item) => {
                // If displaySizes is equal to 'all', show all items.
                if (state.displaySizes === 'all') return item;
                // Otherwise display items where the displaySizes state property is in the Product's sizes array.
                return item.size.indexOf(state.displaySizes) >= 0;
              }).map(({
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
  }
}

Index.getInitialProps = async function IndexGIP() {
  return {
    products: allProducts,
    sizes: getSizes(allProducts),
  };
};

// Export
export default Index;
