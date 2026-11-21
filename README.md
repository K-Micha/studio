
# StudioFlow

**A modular, white-label SaaS platform for freelancers and studios.**

StudioFlow is an independently developed software project designed to simplify the digital management and online presentation of professional services.

The platform targets freelancers and studios in industries such as hairdressing, beauty, makeup artistry, tattooing, and photography.

The long-term goal is to provide a multi-tenant SaaS solution that combines customizable public websites with a centralized administration system.

> **Project Status:** Active development.
>
> This public repository intentionally contains only selected parts of StudioFlow. It is not a complete or independently deployable version of the platform.

---

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | Angular 21, TypeScript |
| Styling | SCSS, BEM methodology |
| UI Components | Angular Material |
| Database | PostgreSQL, Supabase |
| Authentication | Supabase Auth |
| File Storage | Supabase Storage |
| Security | Row Level Security (RLS) |
| Automation | n8n |
| Version Control | Git, GitHub |

---

## Project Architecture

StudioFlow is designed around three interconnected application areas.

### 1. Public Website

Customizable websites for individual freelancers and businesses.

Features planned or currently under development include:

- Editable website content and service descriptions
- Individual service offerings
- Image, video, and showcase galleries
- Multilingual content management
- Responsive layouts and interfaces
- Customizable presentation for different business models
- Integration with the StudioFlow administration system

The public website is designed to provide a professional online presence while allowing content to be managed independently through the administration interface.

### 2. Studio Administration

A centralized dashboard for managing website content and business operations.

Key modules include:

- **Page Content:** Management of website texts and page sections
- **Gallery:** Organization of images, videos, and showcases
- **Appointments:** Calendar views and appointment management
- **Questions:** Customer inquiries and message management
- **Services:** Management of available services and offerings
- **Employees:** Employee and team management
- **Locations:** Management of business locations
- **Languages:** Multilingual content administration

The administration interface follows a modular component architecture and uses Angular Material alongside custom UI components.

### 3. Backend and Data Management

The backend and data architecture is designed to support multiple independent tenants.

Core technologies include PostgreSQL and Supabase.

Key architectural considerations:

- Tenant-specific data isolation
- Authentication and authorization
- Role-based access management
- PostgreSQL Row Level Security
- Structured data access
- Separation of routes, controllers, services, and repositories
- Secure media storage
- Integration with automation workflows

The architecture is being developed with long-term maintainability and scalability in mind.

---

## UI/UX and Design

StudioFlow combines Angular Material with individually developed interface components.

The design approach focuses on:

- Consistent visual language
- Reusable components
- Clear information hierarchy
- Responsive layouts
- Structured navigation
- Accessible interaction patterns
- Custom styling and visual effects
- Practical workflows for everyday business operations

Custom UI elements and visual assets are developed specifically for StudioFlow.

Not all design components or implementations are included in this public repository.

---

## Development Principles

The development process emphasizes clean architecture, readability, and maintainability.

### Frontend

- Angular standalone components
- TypeScript with explicit typing
- Component-based architecture
- SCSS using BEM conventions
- Reusable styles and shared design elements
- Separation of templates, styles, and component logic
- Modular application structure

### Backend

- Separation of responsibilities
- Routes, controllers, services, and repositories
- Parameterized database queries
- Typed interfaces and data structures
- Maintainable and focused functions
- Authentication and access control
- Security-conscious development practices

### General Approach

- Independent UI/UX development
- Incremental implementation of application modules
- Practical problem-solving
- Continuous testing and refinement
- Version control with Git
- Focus on real business requirements

---

## Development Roadmap

StudioFlow is currently under active development.

The planned development sequence includes:

1. Complete the public website for individual freelancers.
2. Develop the public website variant for studios and businesses.
3. Connect both website models to StudioFlow Administration.
4. Complete responsive optimization and mobile layouts.
5. Expand backend integrations and tenant management.
6. Prepare the platform for production deployment.

Features, architecture, and development priorities may change as the project evolves.

---

## About This Repository

This repository is intended as a **public showcase of my software development work**.

Its primary purpose is to demonstrate:

- My experience with Angular and TypeScript
- My approach to frontend architecture
- Component-based development
- SCSS organization and UI implementation
- Application structure and maintainability
- My ongoing development progress

### Important Notice

This repository does **not** contain the complete StudioFlow source code.

Certain components, proprietary design systems, internal business logic, configuration files, and other project resources are intentionally excluded.

The repository is therefore not intended to function as a complete application after cloning.

Public availability is provided for portfolio and demonstration purposes only.

---

## Copyright & License

**Copyright © 2026 Michael Kühn. All rights reserved.**

StudioFlow is proprietary software and is **not released as an open-source project**.

This repository and the original software, designs, and components it contains are protected by applicable intellectual property laws.

No permission is granted to:

- Copy or reproduce protected original project materials
- Modify or redistribute protected implementations
- Republish the project under another name
- Use protected code or designs for commercial purposes
- Create derivative works from protected original materials without authorization
- Extract and reproduce protected implementations using AI systems or automated coding assistants without authorization

Prior written authorization from the copyright holder is required for these uses, except where expressly permitted by applicable law.

Public access to this repository does not grant a general license to reuse its proprietary implementations.

The use of artificial intelligence or automated tools does not remove these restrictions.

Third-party trademarks, logos, and protected assets remain the property of their respective owners.

**License: Proprietary – All Rights Reserved.**

---

## Developer

**Michael Kühn**

Frontend Developer | Angular · TypeScript · SCSS

**Portfolio:** [michael-a-kuehn.de](https://michael-a-kuehn.de)

**GitHub:** [k-micha](https://github.com/k-micha)

---

*StudioFlow is an independent software project developed by Michael Kühn.*
