System Architecture
The application follows a Client-Server architecture where the frontend and backend communicate over HTTP.

1. Backend (server.js)
The backend is the "brain" of the operation. It handles data storage and searching logic.

Environment: Built using Node.js and the Express framework.

Data Management: It reads from a students.json file using the fs module.

API Logic: It exposes a single search endpoint: /api/students/search.

Optimization: To keep the server fast, it only searches once the input is 3 characters long and only returns the first 5 matches.

Security: Uses the cors middleware to allow your React app to access the data without being blocked by browser security policies.

2. Frontend (App.js)
The frontend is the "face" of the operation. It provides an interactive interface for the user.

Framework: Built with React.

Debouncing: This is a critical feature. Instead of calling the server for every letter typed, it waits 300ms for the user to finish typing. This saves bandwidth and prevents flickering.

Interactive UI: It manages "State" to track what the user types, the list of results found, and which specific student is currently being viewed in the profile card.

3.How the Data Flows
Input: User types "John" in the search bar.

Debounce: React waits 300ms.

Request: React sends a fetch request to http://localhost:5000/api/students/search?q=john.

Processing: The Express server reads the JSON, filters names containing "john", and sends back an array of matches.

Display: React receives the array and maps it into a dropdown list.

Selection: User clicks a name, and React updates the "Selected Student" card with their Class and Roll Number.
