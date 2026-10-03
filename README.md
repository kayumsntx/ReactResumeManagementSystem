# React Resume Management System

A full-stack **Resume Management System** built with **ASP.NET Core Web API, React, TypeScript, Entity Framework Core, and SQL Server**.

The application provides employee/resume profile management with experience details, image upload and preview, and complete CRUD operations through a React frontend connected to a RESTful ASP.NET Core Web API.

---

## 🚀 Project Overview

**React Resume Management System** is a full-stack web application designed to demonstrate modern frontend and backend development using React and ASP.NET Core.

The system allows users to:

* Create employee/resume profiles
* View employee records
* Update employee information
* Delete employee records
* Upload profile images
* Preview images before submission
* Manage multiple experience records
* Select experience titles dynamically
* Store employee and experience data in SQL Server
* Communicate between React and ASP.NET Core through REST APIs

---

## 🏗️ Architecture

The project follows a separate frontend and backend architecture:

```text
ReactResumeManagementSystem/
│
├── ResumeApi/
│   └── ResumeApi/
│       ├── Controllers/
│       │   ├── EmployeesController.cs
│       │   └── WeatherForecastController.cs
│       │
│       ├── Models/
│       │   ├── Employee.cs
│       │   ├── ServerContext.cs
│       │   └── DTOs/
│       │       └── EmployeeDTO.cs
│       │
│       ├── Migrations/
│       ├── wwwroot/
│       │   └── images/
│       ├── Program.cs
│       ├── appsettings.json
│       └── ResumeApi.csproj
│
├── Resume-React-Client/
│   ├── src/
│   │   ├── components/
│   │   │   └── EmployeeManagement.tsx
│   │   ├── services/
│   │   │   └── employeeService.ts
│   │   ├── types/
│   │   │   └── employee.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
└── README.md
```

---

## 🛠️ Technologies Used

### Backend

* **ASP.NET Core 9 Web API**
* **C#**
* **Entity Framework Core 9**
* **SQL Server**
* **RESTful API**
* **Swagger / OpenAPI**
* **Newtonsoft.Json**
* **CORS**
* **Entity Framework Core Migrations**

### Frontend

* **React 19**
* **TypeScript**
* **Vite**
* **Axios**
* **Bootstrap 5**
* **React Hooks**

### Database

* **Microsoft SQL Server**
* Entity Framework Core Code First
* EF Core Migrations
* Relationships between Employee, Experience, and ExperienceTitle

---

## ✨ Features

### Employee Management

The application provides complete employee management functionality:

* Add Employee
* View Employees
* Edit Employee
* Delete Employee
* Active/Inactive status
* Join Date management

### Experience Management

Each employee can have multiple experience records.

Experience information includes:

* Experience Title
* Duration
* Employee relationship

Users can dynamically:

* Add experience rows
* Remove experience rows
* Select experience titles
* Specify experience duration

### 🖼️ Image Management

The system supports employee profile image management.

Features include:

* Image file upload
* Image preview
* Image storage in `wwwroot/images`
* Unique image file names
* Image update
* Old image deletion
* Default `noimage.png`

### 🔄 REST API Integration

The React application communicates with the ASP.NET Core Web API using **Axios**.

Example API endpoints:

```text
GET    /api/Employees
GET    /api/Employees/{id}
GET    /api/Employees/titles
POST   /api/Employees
PUT    /api/Employees/{id}
DELETE /api/Employees/{id}
```

### 📦 Multipart Form Data

Employee creation and update use `multipart/form-data` to send:

* Employee information
* Experience JSON data
* Profile image

Example:

```text
EmployeeName
IsActive
JoinDate
ExperiencesString
ImageFile
```

---

## 🗄️ Data Model

The application contains three main entities.

### Employee

```text
Employee
---------
EmployeeId
EmployeeName
IsActive
JoinDate
ImageUrl
ImageName
```

### ExperienceTitle

```text
ExperienceTitle
---------------
ExperienceTitleId
TitleName
```

### Experience

```text
Experience
----------
ExperienceId
EmployeeId
ExperienceTitleId
Duration
```

### Relationship

```text
Employee
   │
   └───< Experience >─── ExperienceTitle
```

An employee can have multiple experience records, while each experience record references an experience title.

---

## 🔌 API Controller

The main API controller is:

```text
EmployeesController
```

It handles:

* Employee retrieval
* Employee creation
* Employee update
* Employee deletion
* Experience title retrieval
* Image upload
* Experience management

---

## 📡 API Endpoints

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| GET    | `/api/Employees`        | Get all employees     |
| GET    | `/api/Employees/{id}`   | Get employee by ID    |
| GET    | `/api/Employees/titles` | Get experience titles |
| POST   | `/api/Employees`        | Create employee       |
| PUT    | `/api/Employees/{id}`   | Update employee       |
| DELETE | `/api/Employees/{id}`   | Delete employee       |

---

## ⚙️ Backend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ReactResumeManagementSystem.git
```

Navigate to the backend:

```bash
cd ReactResumeManagementSystem/ResumeApi/ResumeApi
```

### 2. Configure SQL Server

Open:

```text
appsettings.json
```

Configure your SQL Server connection string.

Example:

```json
{
  "ConnectionStrings": {
    "con": "Server=YOUR_SERVER;Database=ResumeDb;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

> Do not commit passwords, secrets, or production connection strings to GitHub.

### 3. Apply EF Core Migration

Run:

```bash
dotnet restore
dotnet ef database update
```

If the EF CLI tool is not installed:

```bash
dotnet tool install --global dotnet-ef
```

### 4. Run the API

```bash
dotnet run
```

The API will run using the configured ASP.NET Core development URL.

Swagger can be accessed from:

```text
/swagger
```

---

## ⚛️ Frontend Setup

Open another terminal and navigate to:

```bash
cd ReactResumeManagementSystem/Resume-React-Client
```

### 1. Install Dependencies

```bash
npm install
```

### 2. Start React Development Server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

## 🔗 API Configuration

The React application currently communicates with the API through:

```text
http://localhost:5272/api/Employees
```

The API base URL is configured in:

```text
src/services/employeeService.ts
```

Example:

```typescript
const apiBaseUrl = "http://localhost:5272/api/Employees";
```

If your ASP.NET Core API runs on another port, update this URL accordingly.

---

## 🖥️ Frontend Service Layer

API communication is separated into:

```text
src/services/employeeService.ts
```

The service provides methods for:

```typescript
getAll()
getTitles()
create()
updates()
delete()
```

Axios is used to communicate with the backend API.

---

## 📤 Employee Creation Flow

The employee creation process works approximately like this:

```text
React Form
    │
    ├── Employee Information
    ├── Join Date
    ├── Active Status
    ├── Profile Image
    └── Experience Records
             │
             ▼
      FormData / Axios
             │
             ▼
   ASP.NET Core Web API
             │
             ▼
      EmployeesController
             │
       ┌─────┴─────┐
       ▼           ▼
   SQL Server    Image Storage
                     │
                     ▼
              wwwroot/images
```

---

## 🖼️ Image Upload Flow

```text
Select Image
     │
     ▼
React File Input
     │
     ▼
Image Preview
     │
     ▼
FormData
     │
     ▼
Axios POST/PUT
     │
     ▼
ASP.NET Core API
     │
     ▼
wwwroot/images
```

Images are assigned unique file names using GUIDs to reduce filename conflicts.

---

## 🔐 CORS

The ASP.NET Core API is configured with CORS so that the React development server can communicate with the API.

The current development configuration allows:

```text
Any Origin
Any Header
Any Method
```

For production deployment, CORS should be restricted to the specific frontend domain.

---

## 🧪 Build Frontend

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Important Files

### Backend

```text
Program.cs
```

Application configuration, database registration, CORS, Swagger, static files, and controllers.

```text
Controllers/EmployeesController.cs
```

Main employee REST API.

```text
Models/Employee.cs
```

Employee, Experience, and ExperienceTitle entities.

```text
Models/DTOs/EmployeeDTO.cs
```

DTOs used for employee and experience data transfer.

```text
Models/ServerContext.cs
```

Entity Framework Core database context.

### Frontend

```text
src/components/EmployeeManagement.tsx
```

Main employee management UI.

```text
src/services/employeeService.ts
```

Axios-based API service layer.

```text
src/types/employee.ts
```

TypeScript types/interfaces.

```text
src/App.tsx
```

Main React application component.

---

## 📚 Learning Objectives

This project demonstrates practical implementation of:

* ASP.NET Core Web API
* REST API development
* Entity Framework Core
* SQL Server integration
* EF Core migrations
* React functional components
* React Hooks
* TypeScript
* Axios
* FormData
* File upload
* Image preview
* CRUD operations
* Parent-child entity relationships
* DTO usage
* JSON serialization/deserialization
* CORS
* Swagger/OpenAPI
* Full-stack application architecture

---

## 🔮 Possible Future Improvements

The project can be extended with:

* Authentication and Authorization
* JWT-based login
* Role-based access control
* Resume PDF generation
* Printable resume templates
* Search and filtering
* Pagination
* Employee profile details page
* Validation improvements
* Centralized API configuration using environment variables
* Global error handling
* Loading indicators
* Toast notifications
* Unit and integration testing
* Production deployment
* Docker support

---

## 🧹 GitHub Notes

The following generated/development folders should **not** be committed:

```text
node_modules/
bin/
obj/
.vs/
dist/
```

A root-level `.gitignore` should be used for the combined React + ASP.NET Core repository.

---

## 📌 Project Purpose

This project was developed as a practical **full-stack learning project** to understand how a modern React frontend communicates with an ASP.NET Core Web API and SQL Server backend.

It demonstrates the complete flow from:

```text
Frontend UI
    ↓
React / TypeScript
    ↓
Axios
    ↓
ASP.NET Core Web API
    ↓
Entity Framework Core
    ↓
SQL Server
```

---

## 👨‍💻 Author

**MD. KAYUM HOSSAIN**

GitHub:
`https://github.com/kayumsntx`

---

## ⭐ Support

If you find this project useful for learning **React, ASP.NET Core Web API, Entity Framework Core, or SQL Server**, consider giving the repository a ⭐ on GitHub.
