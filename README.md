# Real Time Tracker

## Project Overview

The **Real-Time Tracker** is a web-based application built using Node.js, Express, and Socket.io, designed to track users' locations in real-time. This project utilizes the browser's Geolocation API to capture the user's current location and update it on a live map interface. The application demonstrates how to use WebSockets to achieve real-time communication between the server and clients, ensuring that location updates are immediately reflected on the map.

## Features

- **Real-Time Location Tracking:**
  - Users' locations are tracked in real-time using the Geolocation API.
  - The application updates the map with the current location of each connected user.
  
- **Live Map Interface:**
  - The application uses Leaflet.js to display a live map, which is dynamically updated with users' locations.
  - Users' locations are marked on the map with markers, and these markers update as users move.

- **User Connection Management:**
  - When a user disconnects from the application, their marker is removed from the map.
  - The system efficiently handles multiple users, ensuring smooth real-time updates.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime used for building the backend of the application.
- **Express.js:** A web framework for Node.js that simplifies server creation and routing.
- **Socket.io:** A library that enables real-time, bi-directional communication between web clients and servers.
- **EJS (Embedded JavaScript):** A templating engine used to generate dynamic HTML content on the server side.
- **Leaflet.js:** An open-source JavaScript library used to build interactive maps.
- **Geolocation API:** A browser API used to get the geographical position of a user.

## File Structure

- **app.js:** The main server file that sets up the Express server, Socket.io, and handles routing.
- **views/index.ejs:** The main HTML template that renders the map and includes the necessary scripts for the application.
- **public/js/script.js:** The client-side JavaScript that handles geolocation, WebSocket communication, and map updates.
- **package.json:** Contains the project metadata, including dependencies and scripts.

## Installation and Setup

1. **Clone the Repository:**
   - Clone this project repository to your local machine using the following command:
     ```bash
     git clone <repository-url>
     ```

2. **Install Dependencies:**
   - Navigate to the project directory and install the necessary dependencies using npm:
     ```bash
     cd real-time-tracker
     npm install
     ```

3. **Run the Server:**
   - Start the server by running the following command:
     ```bash
     npm start
     ```
   - The server will start on port 3000 by default. You can access the application by navigating to `http://localhost:3000` in your web browser.

4. **View Real-Time Tracking:**
   - Open the application in your web browser. The map will automatically update to show your current location. If multiple users are connected, you will see their locations as well.

## Usage

- **Real-Time Updates:**
  - As you move, your location is automatically sent to the server and broadcasted to all connected clients.
  - Other users' locations will also appear on your map, updating in real-time as they move.

- **Handling Disconnections:**
  - If a user disconnects, their location marker is removed from the map.

## Future Enhancements

- **User Authentication:**
  - Implement user authentication to track individual users by name or ID.
  
- **Location History:**
  - Add a feature to display a user's movement history on the map.
  
- **Custom Map Layers:**
  - Integrate additional map layers or styles for enhanced map visualization.

## License

This project is licensed under the MIT License.
