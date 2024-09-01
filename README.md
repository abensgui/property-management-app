# Property Management Application

A web-based property management application built with Node.js, Express.js, and SQLite. The application provides an API to manage properties, tenants, and rental payments. The API is secured using JWT-based authentication.

## Features

- **Add Property**: Create new property entries with details such as name, address, type (e.g., apartment or house), number of units, and rental cost.
- **Tenant Management**: Add, modify, and remove tenants from properties. Tenants have associated details like name, contact information, and the section they occupy.
- **Rental Payments Monitoring**: Track payments by tenants, including the date paid and whether it has been settled.
- **Authentication**: JWT-based authentication ensures that only authorized users can perform CRUD operations.
- **API Documentation**: Accessible via Swagger UI for easy integration and testing.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: SQLite (or any other relational database)
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger (using `swagger-ui-express`)

## Prerequisites

- **Node.js**: v12 or higher
- **npm**: Node Package Manager

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abensgui/property-management-app.git
cd property-management-app
```
## Setup Instructions

- **Installing all the necessary packages:**
  ```bash
  chmod +x runBackend.sh && ./runBackend.sh
  ```
- **api documentation (Swagger):**
 -[View the Swagger Documentation](http://localhost:3000/api-docs/)

