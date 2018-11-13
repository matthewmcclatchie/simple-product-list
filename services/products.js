/**
 * Return array of sizes gathered from JSON data
 * @param {array} products
 */
export default function getSizes(products) {
  return products
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
}
