# Property Management App

This is a full-stack property management application with a Node.js/Express backend and a React Native frontend.

---

## Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Android Studio or Xcode (for running the mobile app)

---

## Backend Setup

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `backend` directory:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB URI.

4. **Start the backend server:**
   ```sh
   npm run dev
   ```
   The server will run on `http://localhost:5000` by default.

---

## Frontend Setup

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend/PropertyManagment
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install AsyncStorage (if not already):**
   ```sh
   npm install @react-native-async-storage/async-storage
   ```

4. **Update API URLs:**
   - In all API calls, replace `localhost` with your computer's local IP address (e.g., `192.168.1.5`).
   - Example:
     ```js
     fetch('http://192.168.1.5:5000/api/auth/register', ...)
     ```
   - This is required for real devices and emulators to access the backend.

5. **Start the Metro bundler:**
   ```sh
   npx react-native start
   ```

6. **Run the app:**
   - For Android:
     ```sh
     npx react-native run-android
     ```
   - For iOS (Mac only):
     ```sh
     cd ios && pod install && cd ..
     npx react-native run-ios
     ```

---

## Troubleshooting
- **AsyncStorage is null:** Fully rebuild the app after installing AsyncStorage. See error message for details.
- **Network request failed:** Make sure you are using your computer's IP address, not `localhost`, in API URLs. Ensure both your computer and device/emulator are on the same network.
- **Duplicate email error:** Register with a new email address.

---

## Project Structure

```
backend/
  server/
    models/
    routes/
    config/
  package.json
  ...
frontend/
  PropertyManagment/
    src/
      screens/
    App.tsx
    package.json
    ...
```

---

## License
MIT 