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

    /**
     * Bind event handlers to this
     */
    this.handler = this.handler.bind(this);

    /**
     * Set some state
     */
    this.state = {
      displaySizes: 'all',
      loaded: false, // Used to determine when to show Articles component.
    };
  }

  /**
   * Lifecycle method
   */
  componentDidMount() {
    const size = localStorageGet('size'); // Get localStorage item to persist between refreshes.
    if (size) {
      this.setState({ displaySizes: size }); // Set localStorage to persist selection between refreshes.
    }

    this.setState({
      loaded: true, // Class added when state changes will display Articles component by affecting Opacity.
    });
  }

  /**
   * Define function to be fired by Child Component
   * @param {object} event Trigger event
   */
  handler(event) {
    this.setState({
      displaySizes: event.target.value, // Set state item to value of Select Component.
    });

    localStorageSet('size', event.target.value); // Set localStorage to persist selection between refreshes.
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
            {"Women's Tops"}
          </ArchiveTitle>

          <Articles perRow={4} className={state.loaded ? 'loaded' : ''}>
            {
              /**
               * Filter products to display only those that match the currently selected size.
               */
              props.products.filter((item) => {
                /**
                 * If displaySizes is equal to 'all', show all items.
                 */
                if (state.displaySizes === 'all') return item;

                /**
                 * Otherwise display items where the displaySizes state property is in the Product's sizes array.
                 */
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
