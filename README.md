# Frontend Developer Coding Challenge

## Overview

In this challenge, you are required to create a responsive gallery of flip cards. Each card should display an image on the front. When clicked, the card should animate and rotate to display the back side, which contains a description of the image. Additionally, you need to implement loading states and error handling for data fetching.

## Frontend Development

You can use either Next.js or a plain React app to implement the frontend.

### Fetching Library

You can use any of the following libraries to fetch data:

1. Plain `fetch`
2. Axios
3. RTK Query
4. React Query

### Using Next.js

1. **Create a new Next.js project**:

   - Demonstrate understanding of using nextjs by utilizing nextjs' features.

   ```bash
   npx create-next-app@latest flipcards-frontend
   cd flipcards-frontend

### Using React.js

1. **Create a new React project**:

   ```bash
   npx create-react-app flipcards-frontend
   cd flipcards-frontend

## Requirements

1. **Display a List of Cards**:
   - Fetch the card data from the provided backend endpoint.
   - Display each card with an image on the front side.

2. **Responsive Design**:
   - Ensure the gallery is responsive and works well on various screen sizes, including mobile, tablet, and desktop devices.

3. **Flip Card Animation**:
   - Implement a click event on each card that triggers an animation (rotate in specific direction, depending on the click area) to reveal the description on the back side of the card.
   - You have the freedom to style the cards as you like, but focus on the rotating animations.
      1. Make the flipcards rotating based on area click.
      2. Make diagonal flip as well.

4. **Loading State**:
   - Display a loading indicator while fetching the card data.
   - You have the freedom to implement loading states using any approach or third-party library you prefer.

5. **Error Handling**:
   - Implement error handling to display a user-friendly message if data fetching fails.
   - You have the freedom to implement error handling using any approach or third-party library you prefer.

6. **TypeScript**:
   - TypeScript is a must for this project. Ensure your code is type-safe.

7. **CSS Library (Optional)**:
   - You can use any CSS library of your choice. We use TailwindCSS, but plain CSS is also totally fine.

## Backend API

To start the backend server, follow these steps:

1. **Clone the Repository**:
   - To get started, clone this repository to your local machine:

     ```bash
     git clone https://github.com/io-m/flipcards-backend.git
     cd flipcards-backend
     ```

2. **Install Dependencies**:
   - Install the required dependencies using npm:

     ```bash
     npm install
     ```

3. **Start the Backend Server**:
   - Start the backend server on port 3001:

     ```bash
     node server.js
     ```

The endpoint to fetch the card data is: GET `http://localhost:3001/cards`

### Error Handling

There is a 16% chance that the server will respond with a 500 Internal Server Error. Your frontend should handle this error gracefully and display a user-friendly error message.

## Swagger Documentation

Swagger documentation is available to help you understand and test the API endpoints. To access the Swagger documentation, follow these steps:

1. **Start the Backend Server** (as explained in the setup instructions).

2. **Access Swagger Documentation**:
   - Open your browser and navigate to `http://localhost:3001/api-docs`.

This will open the Swagger UI where you can view and test the API endpoints.


