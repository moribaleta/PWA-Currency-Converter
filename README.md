# PWA-Currency-Converter

Sample project exploring, PWA and Offline Caching Features

In this project, we'll dive into building a dynamic currency converter using React and harnessing the power of Progressive Web App (PWA) technology. With a focus on offline caching, we'll ensure users can access currency conversion functionalities even when connectivity is limited or absent. By following along, you'll learn how to leverage React's flexibility to create a seamless user experience and explore the potential of PWAs to enhance accessibility and convenience.

## Overview

This project aims to create a currency converter application with a backend running on Node.js and a frontend built with React as a Progressive Web App (PWA). The backend handles currency conversion logic and data retrieval from external sources, while the frontend provides a user-friendly interface for seamless currency conversion.

## Project Structure

The project is divided into two main folders:

1. `backend` (Deno): Contains the backend code handling api calls and offline storage.
2. `app` (React): Contains the React PWA frontend code.
3. `shared` (ts) : Contains common files used by backend and app. ie types, classes, objects

## Backend Setup

To run the backend, follow these steps:

1. Navigate to the `backend` directory.
2. Start the backend server:
   ```
   deno task dev-watch
   ```

The backend server will start running at the specified port (default is 3000).

## Frontend Setup

To run the frontend PWA, proceed as follows:

1. Navigate to the `frontend` directory.
2. Install dependencies by running:
   ```
   yarn install
   ```
3. Build the React app for production:
   ```
   yarn build
   ```
4. Start the frontend server:
   ```
   yarn start
   ```

The React PWA will be accessible at the specified port (default is 3000) and can be accessed via a web browser.

## Usage

Once both backend and frontend servers are running, users can access the currency converter application through their web browser. They can input the amount to convert, select the desired currencies, and instantly view the converted amount. Offline caching ensures that the application remains functional even in low or no connectivity scenarios.

## Technologies Used

- Deno
- React
- Progressive Web App (PWA) features
- Offline caching

## Features

1. **Currency List Retrieval**:

   - The app can retrieve a list of available currencies supported by the application.

2. **Currency Conversion**:

   - Users can convert one currency to another by specifying the amount and selecting the desired currencies.

3. **Offline Caching**:

   - Each time the currency list is retrieved, it will be cached for offline use, ensuring seamless access to currency data even without an internet connection.

4. **Offline Detection**:
   - The application is capable of detecting if the device is offline, providing appropriate feedback to the user.

## References

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Progressive Web Apps - Web Fundamentals](https://developers.google.com/web/progressive-web-apps)
- [Service Workers - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Building a Progressive Web App (PWA) with React: Offline Capabilities](https://manoj-shu100.medium.com/building-a-progressive-web-app-pwa-with-react-offline-capabilities-56aab3971de8)
- [Create React App Template](https://create-react-app.dev/docs/making-a-progressive-web-app/)
- [Turning a React app into an installable PWA with offline detection, service workers and theming](https://medium.com/@alexgurr/turning-a-react-app-into-an-installable-pwa-with-offline-detection-service-workers-and-theming-8a996b61ae31)
