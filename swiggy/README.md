# Swiggy Clone - Full Stack Web Application

This project is a Swiggy Clone built using Angular for the frontend and mock APIs for simulating authentication, registration, and the food order functionality. The application allows users to register, log in, and order food from a variety of restaurants.

## Features

### User Authentication:

Users can log in and register using their email, username, and password.
User data is stored locally and authenticated via mock APIs.
On successful login or registration, users are redirected to the order page.

### Food Ordering:

Browse through different restaurants and their food items.
Add items to the cart for ordering.
Simulate a complete ordering process (UI-only, no payment gateway integration).

### Routing and Navigation:

Protected routes that require login (via Auth Guard).
Users are redirected to the login page with an appropriate message if they attempt to access protected routes without being logged in.

### Responsive Design:

The app is mobile-first and responsive, optimized for both mobile and desktop screens.

## Tech Stack

### Frontend:

Angular (latest version)
Bootstrap / Tailwind CSS (for responsive and modern UI)
RxJS (for handling asynchronous operations and reactive programming)

### Backend (Mock APIs):

MockAPI.io (for simulating a backend server)
HTTP Client for making API calls

### Other Libraries:

Angular Forms (for handling user input and form validation)
BehaviorSubject from RxJS (for managing dynamic messages)

## Folder Structure

```plaintext
.
├── README.md                       # Project documentation
├── angular.json                    # Angular configuration file
├── package-lock.json               # Automatically generated package-lock file for npm
├── package.json                    # Project metadata and dependencies
├── public
│   └── favicon.ico                 # Application icon
├── src
│   ├── app
│   │   ├── components              # Reusable UI components
│   │   │   ├── footer              # Footer component (footer.component.ts, footer.component.html, footer.component.css)
│   │   │   ├── header              # Header component (header.component.ts, header.component.html, header.component.css)
│   │   │   ├── menu-item           # Menu item component (menu-item.component.ts, menu-item.component.html, menu-item.component.css)
│   │   │   └── restaurant-card     # Restaurant card component (restaurant-card.component.ts, restaurant-card.component.html, restaurant-card.component.css)
│   │   ├── pages                   # Pages in the app
│   │   │   ├── cart                # Cart page (cart.component.ts, cart.component.html, cart.component.css)
│   │   │   ├── favorites           # Favorites page (favorites.component.ts, favorites.component.html, favorites.component.css)
│   │   │   ├── home                # Home page (home.component.ts, home.component.html, home.component.css)
│   │   │   ├── login               # Login page (login.component.ts, login.component.html, login.component.css)
│   │   │   └── order               # Order page (order.component.ts, order.component.html, order.component.css)
│   │   ├── services                # Application services for logic and API calls
│   │   │   ├── auth.guard.ts       # Authentication guard for protected routes
│   │   │   ├── auth.service.ts     # Authentication service for login and registration
│   │   │   ├── cart.service.ts     # Service to manage cart items
│   │   │   └── favorites.service.ts # Service to manage favorites
│   │   ├── app.component.ts        # Root component of the application
│   │   └── app.routes.ts           # Routing configuration for the app
│   ├── assets                      # Static assets such as images
│   │   └── userImage.png           # Example user profile image
│   ├── index.html                  # Main HTML entry point
│   ├── main.ts                     # Main entry point for the Angular application
│   └── styles.css                  # Global CSS styles
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.app.json               # TypeScript configuration for Angular app
├── tsconfig.json                   # Global TypeScript configuration
└── tsconfig.spec.json              # TypeScript configuration for tests
```
