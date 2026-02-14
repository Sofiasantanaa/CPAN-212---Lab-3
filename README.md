## IncidentTracker Web Application
## Project Overview

The IncidentTracker Web Application is a Node.js and Next.js-based system designed to manage the reporting, tracking, and archiving of incidents within an organization.

The main objective of the application is to replace informal incident tracking (such as spreadsheets or emails) with a structured system that enforces incident lifecycle rules and controlled status transitions.

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

## Key Features

- Persistent file-based JSON storage

- Full CRUD operations for incidents

- Business rule enforcement for status transitions

- Dashboard with real-time KPIs

- Bulk CSV upload with validation

- Modular backend and reusable frontend components
