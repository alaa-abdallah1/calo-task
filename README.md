
# Job Management Application

This project is a job management application that includes both backend and frontend services. The backend service manages job creation and status updates, while the frontend service provides a user interface to interact with the jobs.

## Structure

- `backend`: Contains the backend service code.
- `frontend`: Contains the frontend service code.

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

## Installation

### 1. Clone the repository

```sh
git clone <repository-url>
cd job-management-application
```

### 2. Setup Backend

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

3. Create a `.env` file in the backend directory and add the following:
   ```sh
   ACCESS_KEY=your_unsplash_access_key
   ```

4. Start the backend server:
   ```sh
   yarn dev
   ```

5. The backend server will start at `http://localhost:4000`.

### 3. Setup Frontend

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

3. Create a `.env` file in the frontend directory and add the following:
   ```sh
   VITE_APP_API_URL=http://localhost:4000
   ```

4. Start the frontend development server:
   ```sh
   yarn dev
   ```

5. The frontend application will start at `http://localhost:3000`.

## Usage

1. Open the frontend application in your browser at `http://localhost:3000`.
2. Use the "Create New Job" button to create new jobs.
3. View the list of jobs and their statuses or results in real-time.

## Repositories

- Backend Service: [Backend README](./backend/README.md)
- Frontend Service: [Frontend README](./frontend/README.md)

## Additional Notes

- Ensure both backend and frontend services are running simultaneously for the application to function correctly.
- Update the `.env` files with appropriate values as needed.
