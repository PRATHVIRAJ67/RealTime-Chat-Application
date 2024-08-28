

# Real-Time Chat Application

**Hosted Link**: [https://real-timechatapp.vercel.app/](https://real-timechatapp.vercel.app/)

## Overview
This project is a dynamic real-time chat application that provides users with a seamless messaging experience. The application offers secure user authentication, real-time messaging, group chat capabilities, and various user-friendly features such as message history, message deletion, and user blocking.

## Features
- **Real-Time Messaging**: Instantly send and receive messages in real-time using Socket.IO.
- **Group Chat**: Create and manage group chats with multiple users.
- **Secure User Authentication**: User registration and login with secure authentication mechanisms.
- **Message History**: View and retrieve chat history for individual and group chats.
- **Message Deletion**: Delete messages from the chat.
- **User Blocking**: Block users to prevent them from sending messages.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT), bcrypt

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_link>
   ```

2. Navigate to the project directory:
   ```bash
   cd real-time-chat-app
   ```

3. Install dependencies for both the frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the `backend` directory and add the following:
   ```
   MONGODB_URI=<your_mongoDB_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   ```

5. Run the application:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend server:
     ```bash
     cd frontend
     npm start
     ```

6. Access the application:
   Open your browser and go to `http://localhost:3000`.

## Usage

1. **Sign Up/Login**: Create a new account or log in with existing credentials.
2. **Real-Time Messaging**: Send messages to users and see them delivered instantly.
3. **Group Chat**: Start a group conversation with multiple participants.
4. **Message History**: Access your previous conversations easily.
5. **Block Users**: Prevent specific users from contacting you.

## Future Enhancements
- **File Sharing**: Implement file and image sharing in chats.
- **Notifications**: Add push notifications for new messages.
- **User Status**: Show online/offline status of users.

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request for any improvements or bug fixes.

