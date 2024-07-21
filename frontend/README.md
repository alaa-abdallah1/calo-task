
# Job Management Frontend

This frontend application provides a user interface to manage jobs, which involve delayed execution of retrieving random Unsplash images from the food category. Users can create new jobs and view the status or result of existing jobs in real-time.

## Features

- Display a list of jobs.
- Create new jobs.
- Real-time updates for job results using Socket.IO.
- Responsive design.

## Technologies Used

- Vue.js
- Tailwind CSS
- Socket.IO
- TypeScript

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd job-management-frontend
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```sh
   VITE_APP_API_URL=http://localhost:4000
   ```

4. Start the development server:
   ```sh
   yarn dev
   ```

5. The frontend application will start at `http://localhost:3000`.

## Components

### App.vue

- Main component that integrates all other components and handles state management.

### JobList.vue

- Displays a list of jobs.
- Shows an attractive SVG illustration when there are no jobs available.

### JobCard.vue

- Displays individual job information with hover effects.
- Shows a skeleton loader while the job result is loading.

### LoadingButton.vue

- A button component that displays a loading spinner when clicked.

## Usage

1. Open the frontend application in your browser.
2. Click on "Create New Job" to create a new job.
3. View the list of jobs and their status or result.
