##### WELCOMEEEEEEEEEEEEE ##########
This project is a starter template for building a React application using Vite. It includes a simple user directory that fetches and displays user data from an external API.

## Project Structure

```
.vite-react-starter/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── index.css
│   ├── main.jsx
│   ├── UserList.css
│   └── UserList.jsx
└── vite.config.js
```

## Features

- **Vite**: Fast build tool and development server.
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **ESLint**: Linter for identifying and reporting on patterns in JavaScript.
- **CSS Modules**: Scoped CSS to avoid conflicts.


### Running the Development Server

npm run dev (npm start for noobs)

## Project Details

### `src/App.jsx`

The main component that renders the `UserList` component.

### `src/UserList.jsx`

Fetches and displays a list of users from the API `https://jsonplaceholder.typicode.com/users`. It uses Axios for making HTTP requests and React hooks (`useState` and `useEffect`) for managing state and side effects.

### `src/UserList.css`

Contains the styles for the `UserList` component, including responsive design and hover effects.

### `src/main.jsx`

The entry point of the application. It renders the `App` component into the root DOM element.


