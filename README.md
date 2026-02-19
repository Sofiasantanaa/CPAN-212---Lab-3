## IncidentTracker Web Application
## Project Overview

The IncidentTracker Web Application is a Node.js and Next.js-based system for reporting, tracking, and archiving incidents within an organization. It replaces informal tracking methods like spreadsheets or emails with a structured system that enforces incident lifecycle rules and controlled status transitions. 

# The system supports:

- Incident creation with title, description, category, and severity

- Controlled status transitions (OPEN → INVESTIGATING → RESOLVED → ARCHIVED)

- Archiving and optional display of archived incidents

- Bulk incident import via CSV files

- Validation of inputs and business rules

- Dashboard with KPIs and incident status overviews

The application is implemented using modern JavaScript (ES Modules), Express, and Next.js, following a modular and layered architecture for maintainability.

## Setup Instructions
## Prerequisites

- Node.js version 18 or higher
- Git (optional, for version control)

## Installation 
1. Clone the repository:

git clone <your-repo-url>
cd incidenttracker

2. Install backend dependencies:
cd backend
npm install

3. Install frontend dependencies:

cd ../frontend
npm install

## Running the application 
- Start the backend server:

cd backend
npm start

- Start the frontend:

cd frontend
npm run dev
Open the app in your browser at: http://localhost:3000

## API Endpoints 
Method	Endpoint	Description
GET	/health	Returns { status: "ok" }
GET	/api/incidents	Retrieves all incidents
GET	/api/incidents/:id	Retrieves a specific incident by ID
POST	/api/incidents	Creates a new incident
PATCH	/api/incidents/:id/status	Updates the status of an incident
POST	/api/incidents/bulk-upload	Upload multiple incidents via CSV

## CSV Format 
CSV files for bulk upload must include columns: title,description,category,severity,status
