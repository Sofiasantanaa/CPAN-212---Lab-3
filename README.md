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
- Clone the repository
- Install dependencies using npm install
- Start the backend with npm run start:backend
- Start the frontend with npm run dev
- Open your browser at http://localhost:3000 to use the app
- ## NOTE: No additional configuration is required
  
## API Endpoints 
The system provides REST endpoints for full CRUD operations, status updates, and bulk CSV import. Main endpoints include: GET /api/incidents to retrieve all incidents, POST /api/incidents to create a new incident, PUT /api/incidents/:id to update an incident, DELETE /api/incidents/:id to delete an incident, and POST /api/incidents/upload for CSV import

## CSV Format 
CSV files for bulk upload must include columns: title,description,category,severity,status
