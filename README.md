# Simple Job Tracker Application

> Design and develop a Job Tracker Application that allows users to manage and track their job applications efficiently. The application should enable users to add, edit, delete, and view their job applications, categorize them based on their status, and set reminders for follow-ups.

## Features

1. User Authentication:

- User registration and login
- Password reset functionality

2. Job Application Management:

- Add new job applications
- Edit existing job applications
- Delete job applications
- View list of job applications

3. Job Application Details:

- Company name
- Job title
- Application status (Applied, Interviewing, Offer, Rejected)
- Application date
- Follow-up date
- Notes

4. Dashboard:

- Overview of job applications by status
- Recent applications
- Upcoming follow-up reminders

5. Notifications:

- Email notifications for upcoming follow-up dates

6. Deployment:

- Deploy the application on a cloud platform (Render, Firebase, etc.)

---

## Sprints:

- Sprint 1: User Authentication & Initial Setup

  - Task 1: Setup project repository and development environment.
  - Task 2: Implement user registration and login functionality.
  - Task 3: Setup database schema for user data.
  - Task 4: Create initial frontend layout using React.

- Sprint 2: Job Application Management

  - Task 1: Create database schema for job applications.
  - Task 2: Implement backend API endpoints for CRUD operations on job applications (using Node.js/Express).
  - Task 3: Implement frontend components for adding, editing, and deleting job applications.
  - Task 4: Connect frontend with backend APIs.

- Sprint 3: Dashboard & Notifications

  - Task 1: Implement dashboard to display job applications overview.
  - Task 2: Implement functionality to categorize applications by status.
  - Task 3: Set up email notifications for follow-up dates using a service like SendGrid.
  - Task 4: Integrate notification service with backend.

- Sprint 4: Testing & Deployment

  - Task 1: Conduct end-to-end testing of the application.
  - Task 2: Fix any bugs and optimize performance.
  - Task 3: Prepare deployment scripts and configurations.
  - Task 4: Deploy the application to a cloud platform.

## Technology Stack:

- Frontend: React.js, HTML, CSS
- Backend: Node.js, Express.js
- Database: MongoDB (for flexibility with JSON-like documents)
- Authentication: JWT (JSON Web Tokens)
- Deployment: Render/Firebase
- Notifications: SendGrid (for email notifications)

---

## Detailed Task Breakdown:

- Sprint 1: User Authentication & Initial Setup

  - Task 1: Setup project repository and development environment

  > Initialize Git repository, Set up project structure for frontend and backend, Install necessary dependencies

  - Task 2: Implement user registration and login functionality

  > Create registration and login pages in React, Set up authentication routes in Express, Implement JWT-based authentication

  - Task 3: Setup database schema for user data

  > Define user schema in MongoDB, Implement user registration and login logic in Express

  - Task 4: Create initial frontend layout using React

  > Create basic navigation and routing, Implement a simple layout for the application

- Sprint 2: Job Application Management

  - Task 1: Create database schema for job applications

  > Define job application schema in MongoDB

  - Task 2: Implement backend API endpoints for CRUD operations on job applications

  > Create Express routes for adding, editing, deleting, and retrieving job applications, Implement logic for interacting with MongoDB

  - Task 3: Implement frontend components for adding, editing, and deleting job applications

  > Create forms and views in React for job applications, Connect forms to backend API using Axios or Fetch

  - Task 4: Connect frontend with backend APIs

  > Ensure data flow between frontend and backend is seamless

- Sprint 3: Dashboard & Notifications

  - Task 1: Implement dashboard to display job applications overview

  > Create dashboard component in React, Implement logic to fetch and display job applications data

  - Task 2: Implement functionality to categorize applications by status

  > Add status filtering options in the dashboard, Implement backend logic to query applications by status

  - Task 3: Set up email notifications for follow-up dates using a service like SendGrid

  > Configure SendGrid account and integrate with backend, Implement logic to send email notifications

  - Task 4: Integrate notification service with backend

  > Set up cron jobs or scheduled tasks for sending follow-up reminders

- Sprint 4: Testing & Deployment

  - Task 1: Conduct end-to-end testing of the application

  > Write unit and integration tests for frontend and backend, Test all user flows manually

  - Task 2: Fix any bugs and optimize performance

  > Debug and resolve issues, Optimize database queries and frontend performance

  - Task 3: Prepare deployment scripts and configurations

  > Set up environment variables for deployment, Configure deployment settings

  - Task 4: Deploy the application to a cloud platform

  > Deploy backend and frontend to Heroku or AWS, Verify deployment and perform final testing

---

## User Stories

### Sprint 1: User Authentication & Initial Setup

Setup Project Repository and Development Environment

- User Story: As a developer, I want to set up the project repository and development environment so that I can start working on the project efficiently.

User Registration

- User Story: As a new user, I want to register for an account so that I can use the Job Tracker Application.

User Login

- User Story: As a registered user, I want to log in to my account so that I can access my job applications.

Database Schema for User Data

- User Story: As a developer, I want to create a database schema for user data so that user information is stored securely.

Initial Frontend Layout

- User Story: As a user, I want to see a clean and simple layout when I visit the Job Tracker Application so that I have a good user experience.

### Sprint 2: Job Application Management

Create Database Schema for Job Applications

- User Story: As a developer, I want to create a database schema for job applications so that job application data is structured and stored properly.

Backend API for CRUD Operations

- User Story: As a user, I want to be able to add, edit, delete, and view my job applications so that I can manage my job search effectively.

Frontend Components for Job Applications

- User Story: As a user, I want to have intuitive forms and views for managing my job applications so that I can easily add and update my applications.

Connect Frontend with Backend APIs

- User Story: As a developer, I want to connect the frontend with backend APIs so that the application functions seamlessly.

### Sprint 3: Dashboard & Notifications

Dashboard Overview

- User Story: As a user, I want to see an overview of my job applications on the dashboard so that I can quickly understand my job search status.

Categorize Applications by Status

- User Story: As a user, I want to filter my job applications by status so that I can easily manage my job search process.

Email Notifications for Follow-Up Dates

- User Story: As a user, I want to receive email notifications for upcoming follow-up dates so that I don't miss important follow-ups.

Integrate Notification Service

- User Story: As a developer, I want to integrate an email notification service with the backend so that users receive timely reminders.

### Sprint 4: Testing & Deployment

End-to-End Testing

- User Story: As a developer, I want to conduct end-to-end testing of the application so that I can ensure all features work correctly.

Bug Fixing and Performance Optimization

- User Story: As a developer, I want to fix any bugs and optimize performance so that users have a smooth experience using the application.

Prepare Deployment Scripts and Configurations

- User Story: As a developer, I want to prepare deployment scripts and configurations so that the application can be deployed easily.

Deploy the Application

- User Story: As a user, I want the application to be deployed on a cloud platform so that I can access it from anywhere.

These user stories cover the essential tasks for each sprint, ensuring a structured and user-focused approach to developing the Job Tracker Application.

---

## Wireframes

### Login Page

```
+-------------------------------------+
|            Job Tracker              |
|-------------------------------------|
|                                     |
|  [Logo]                             |
|                                     |
|  Login                              |
|-------------------------------------|
|  Email: [_______________________]   |
|  Password: [____________________]   |
|                                     |
|  [Login Button]                     |
|                                     |
|  [Register]                         |
|  [Forgot Password?]                 |
|                                     |
+-------------------------------------+
```

### Registration Page

```
+-------------------------------------+
|            Job Tracker              |
|-------------------------------------|
|                                     |
|  [Logo]                             |
|                                     |
|  Register                           |
|-------------------------------------|
|  Username: [_____________________]  |
|  Email: [_______________________]   |
|  Password: [____________________]   |
|  Confirm Password: [_____________]  |
|                                     |
|  [Register Button]                  |
|                                     |
|  [Login]                            |
|                                     |
+-------------------------------------+
```

### Dashboard

```
+----------------------------------------------------------+
|                        Job Tracker                       |
|----------------------------------------------------------|
|  [Logo]                             |  [Logout]          |
|----------------------------------------------------------|
|  Dashboard  |  Add Job  |  Job List  |  Settings          |
|----------------------------------------------------------|
|  Overview                                              |
|----------------------------------------------------------|
|  [Status Summary: Applied, Interviewing, Offer, Rejected]|
|----------------------------------------------------------|
|  Recent Applications                                     |
|----------------------------------------------------------|
|  [Company] | [Job Title] | [Status] | [Application Date] |
|----------------------------------------------------------|
|  Follow-Up Reminders                                     |
|----------------------------------------------------------|
|  [Company] | [Job Title] | [Follow-Up Date]              |
+----------------------------------------------------------+
```

### Add Job Application Page

```
+-------------------------------------+
|            Job Tracker              |
|-------------------------------------|
|  [Logo]                             |  [Logout]          |
|-------------------------------------|
|  Dashboard  |  Add Job  |  Job List  |  Settings          |
|-------------------------------------|
|  Add Job Application                                      |
|-------------------------------------|
|  Company Name: [____________________]                     |
|  Job Title: [_____________________]                       |
|  Application Status:                                      |
|    [ ] Applied  [ ] Interviewing  [ ] Offer  [ ] Rejected |
|  Application Date: [________________]                    |
|  Follow-Up Date: [_________________]                     |
|  Notes:                                                  |
|  [___________________________________________________]   |
|                                                          |
|  [Add Job Button]                                        |
+-------------------------------------+
```

### Edit Job Application Page

```
+-------------------------------------+
|            Job Tracker              |
|-------------------------------------|
|  [Logo]                             |  [Logout]          |
|-------------------------------------|
|  Dashboard  |  Add Job  |  Job List  |  Settings          |
|-------------------------------------|
|  Edit Job Application                                     |
|-------------------------------------|
|  Company Name: [____________________]                     |
|  Job Title: [_____________________]                       |
|  Application Status:                                      |
|    [ ] Applied  [ ] Interviewing  [ ] Offer  [ ] Rejected |
|  Application Date: [________________]                    |
|  Follow-Up Date: [_________________]                     |
|  Notes:                                                  |
|  [___________________________________________________]   |
|                                                          |
|  [Save Changes Button]                                   |
+-------------------------------------+
```

### Job List Page

```
+----------------------------------------------------------+
|                        Job Tracker                       |
|----------------------------------------------------------|
|  [Logo]                             |  [Logout]          |
|----------------------------------------------------------|
|  Dashboard  |  Add Job  |  Job List  |  Settings          |
|----------------------------------------------------------|
|  Job List                                              |
|----------------------------------------------------------|
|  [Company] | [Job Title] | [Status] | [Application Date] |
|----------------------------------------------------------|
|  [Edit Button]  [Delete Button]                          |
|----------------------------------------------------------|
+----------------------------------------------------------+
```

---

## Project Architecture Diagram

```
+-----------------------------------------------------------+
|                        Frontend                           |
|-----------------------------------------------------------|
|            |                       |                      |
|       Login Page             Registration Page           |
|            |                       |                      |
|        Dashboard                  |                      |
|     /   |    \                  Add Job Application      |
| Job List   Add Job           /       |          \         |
|              |           Edit Job   View Job  Delete Job  |
|              |                  \    |   /                |
|        React Components     React Forms                  |
|-----------------------------------------------------------|
|                        Backend                            |
|-----------------------------------------------------------|
|            |                       |                      |
|      Authentication             Job Management           |
|            |                       |                      |
|  Registration/ Login     Create/ Edit/ Delete/ View       |
|  JWT Auth Middleware         API Routes                  |
|-----------------------------------------------------------|
|                       Database                            |
|-----------------------------------------------------------|
|          |                        |                       |
|        Users                  Job Applications            |
|   (User Schema)                (Job Schema)               |
|-----------------------------------------------------------|
|                      Deployment                           |
|-----------------------------------------------------------|
|            |                        |                     |
|        Cloud Server                 |                     |
|            |                        |                     |
|       Environment Variables        Server                 |
|       Deployment Scripts           Hosting                |
+-----------------------------------------------------------+
```

## Database Schema Examples

### User Schema

```javascript
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("User", UserSchema)
```

### Job Application Schema

```javascript
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const JobApplicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  application_status: {
    type: String,
    enum: ["Applied", "Interviewing", "Offer", "Rejected"],
    default: "Applied",
  },
  application_date: {
    type: Date,
    required: true,
  },
  follow_up_date: {
    type: Date,
  },
  notes: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("JobApplication", JobApplicationSchema)
```

---

Thank You!

---
