# simple-product-list

A simple, React-based product list Component. It should display a grid of Products using data from a local JSON file that can be filtered by size using the dropdown menu.

Simple localStorage access functions are included to persist filter selection between refreshes and a simple Component lifecycle + CSS transition solution handles hiding and showing the Products when the page is refreshed.

## Getting Started

### Prerequisites

Please ensure you have the following installed on your system:

- [Node.js (^9.10.0)](https://nodejs.org/en/)

### Installing

After cloning the repository, please follow these steps:

- In your Terminal application, run `npm install`
- Once installation is complete, run `npm run build`
- Once build is complete, run `npm run start`
- Visit `http://localhost:3000/` in your browser


## Built With

- [Next.js](https://github.com/zeit/next.js/) - Provides Server Side Rendering as standard as well as a simple routing system. 

- [Styled Components](https://www.styled-components.com/) - A brilliant CSS-in-JS solution.


## Acknowledgments

- [styled-normalize](https://www.npmjs.com/package/styled-normalize) - Whilst not strictly necessary, I always like to Normalize CSS. Given the front-end stack this was the most efficient and 'lowest-maintenance' option. Adding this manually via styled-components `createGlobalStyles` method was also an option and may well be more appropriate in cases where regular maintenance is required.

- [apparel-sorter](https://www.npmjs.com/package/apparel-sorter) - Sorting non-numeric or alphabetical is difficult. This package handles sorting clothing sizes in a variety of formats, including standard 'letter' sizing, which is exactly what is required in this project.
