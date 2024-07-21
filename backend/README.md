# Job Management Backend Service

This backend service provides endpoints to manage jobs, which involve delayed execution of retrieving random Unsplash images from the food category. The service supports the creation of jobs and fetching job results.

## Features

- **POST /jobs**: Create a new job in the system and return its ID.
- **GET /jobs**: Return a list of jobs with their status or result.
- **GET /jobs/{id}**: Return a specific job's status or result.
- **Socket.IO**: Real-time updates when a job is resolved.

## Technologies Used

- Node.js
- Express
- Axios
- Socket.IO
- TypeScript

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

3. Copy the example env file and make the required configuration changes in the .env file
   ```sh
   cp .env.example .env
   ```
4. Start the server:

   ```sh
   yarn dev
   ```

5. The backend server will start at `http://localhost:4000`.

## API Endpoints

### Create a Job

- **POST /jobs**
  - Response: `{ "id": "job-id" }`

### Get All Jobs

- **GET /jobs**
  - Response:
    ```
      [
         {
            "id":"job-id",
            "status":"pending""|""resolved",
            "image""?":{
               "url":"image-url",
               "createdBy":"string",
               "description":"string"
            }
         }
      ]
    ```

### Get a Job by ID

- **GET /jobs/{id}**
  - Response:
    ```
     {
        "id":"job-id",
        "status":"pending""|""resolved",
        "image""?":{
           "url":"image-url",
           "createdBy":"string",
           "description":"string"
        }
     }
    ```
