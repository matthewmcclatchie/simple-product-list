const sorter = require('apparel-sorter');

/**
 * Return array of sizes gathered from JSON data
 * @param {array} products
 */
export function getSizes(products) {
  /**
   * Store filtered sizes Array in variable;
   */
  const sizes = products
    /**
     * Map over products Array and return size property.
     */
    .map(item => item.size)
    /**
     * Reduce size properties (of type Array) into a single Array by concatenating.
     */
    .reduce((accumulator, item) => accumulator.concat(item), [])
    /**
     * Filter flattened Array to return only unique values.
     * On each iteration, compare the value of the index of the current item (Number) with the index of the item in the array being filtered.
     * If they match, then the item is unique, as it is the first instance of that item.
     * If they don't match, then the current item already exists in the array.
     */
    .filter((item, index, self) => index === self.indexOf(item));

  /**
   * Run sizes array through apparel-sorter and return.
   */
  return sorter.sort(sizes);
}

/**
 * Get localStorage item
 * @param {string} key Key of localStorage item to get
 */
export function localStorageGet(key) {
  if (!key) {
    console.error('Key missing'); // eslint-disable-line
    return false;
  }

  return localStorage.getItem(key);
}

/**
* Set localStorage item
 * @param {*} key Key of localStorage item to set
 * @param {*} val Value of localStorage item to set
 */
export function localStorageSet(key, val) {
  if (!key || !val) {
    console.error('Key and/or Value missing'); // eslint-disable-line
    return false;
  }

  return localStorage.setItem(key, val);
}
