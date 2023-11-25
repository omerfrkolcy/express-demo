# (SSR) Static Portfolio Website

This is a portfolio website built with Node.js, Express.js, and Jade (Pug).

## Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Jade (Pug)**: A high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js.

## How It Works

The website uses server-side rendering (SSR) to generate HTML on the server and send the fully rendered page to the client. This approach provides a faster initial page load compared to client-side rendering (CSR) and is beneficial for SEO.

When a user makes a request, the Express.js server handles the request and sends back the appropriate HTML by rendering a Jade (Pug) template.

## Methodology

The project follows the MVC (Model-View-Controller) design pattern. The `routes` directory contains the controllers, the `views` directory contains the views (Jade templates), and the models would typically be defined in a `models` directory (not present in this basic portfolio website).

The project also uses middleware for tasks like logging requests, parsing request bodies, and serving static files.

## Running the Project

To run the project, first install the dependencies with `npm install`. Then start the server with `npm start`. The website will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on GitHub.