/**
 * Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component
 * @param {object} props
 */
const ArticleCard = ({ text }) => (
  <div>
    <p>{text}</p>
  </div>
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
