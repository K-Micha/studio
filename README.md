
# StudioFlow

**A modular, white-label SaaS platform for freelancers and studios.**

StudioFlow is an independently developed software project designed to simplify the digital management and online presentation of professional services.

The platform targets freelancers and studios in industries such as hairdressing, beauty, makeup artistry, tattooing, and photography.

The goal is to provide a multi-tenant SaaS solution that combines individually configurable public websites with a separate Angular-based administration application.

StudioFlow is designed to allow customers to manage their website content, services, media, and business settings through a centralized administration interface, without requiring direct access to the website's source code.

> **Project Status:** Active development.
>
> This public repository intentionally contains only selected parts of StudioFlow. It is not a complete or independently deployable version of the platform.

---

## Technology Stack

| Category | Technologies |
|---|---|
| Public Website | Angular 21, TypeScript |
| Administration | Angular 21, Angular Material, TypeScript |
| Styling | SCSS, BEM methodology |
| UI Components | Angular Material, custom components |
| Database | PostgreSQL, Supabase |
| Authentication | Supabase Auth |
| File Storage | Supabase Storage |
| Security | Row Level Security (RLS) |
| Automation | n8n |
| Version Control | Git, GitHub |

---

## Project Architecture

StudioFlow is structured around three interconnected application areas:

1. Public Website
2. Studio Administration
3. Backend and Data Management

The public website and administration panel are developed as separate Angular applications.

They are designed to communicate through a shared backend and data infrastructure, allowing each customer's website configuration to be managed centrally.

### 1. Public Website

The public-facing application provides customizable websites for individual freelancers, studios, and businesses.

Each website is designed to reflect the customer's individual business profile, services, visual presentation, and content preferences.

Features planned or currently under development include:

- Editable website content and service descriptions
- Individual service offerings
- Image, video, and showcase galleries
- Multilingual content management
- Responsive layouts and interfaces
- Customizable presentation for different business models
- Customer-specific website configurations
- Integration with the StudioFlow administration system

Rather than requiring manual changes to the website's source code, StudioFlow is designed to retrieve customer-specific configurations from the backend.

This allows website content and settings to be managed through the administration application.

The public website and its internal management system remain technically separated while forming part of the same platform.

### 2. Studio Administration

Behind the public-facing website, StudioFlow includes a separate Angular application built with Angular Material.

This administration application provides the central management interface for customer-specific website configurations and business operations.

The objective is to allow freelancers and studio owners to maintain their websites independently through an intuitive dashboard.

Key modules include:

- **Page Content:** Management of website texts and individual page sections
- **Gallery:** Organization of images, videos, and showcases
- **Appointments:** Calendar views and appointment management
- **Questions:** Customer inquiries and message management
- **Services:** Management of available services and offerings
- **Employees:** Employee and team management
- **Locations:** Management of business locations
- **Languages:** Multilingual content administration

#### Customer-Specific Configuration

The administration system is designed to manage settings and content individually for each customer.

Depending on the customer's business model, these configurations may include:

- Freelancer or studio website configuration
- Available services and service descriptions
- Website content and media
- Language preferences
- Business locations
- Employees and team structures
- Appointment-related settings
- Visibility of individual website sections

The public website is designed to synchronize with these configurations through the backend.

This architecture allows the same underlying website system to support different customers without requiring a separate implementation for every business.

#### Separation of Applications

The public website and administration panel are intentionally maintained as separate Angular applications.

This separation provides a clearer distinction between:

- Publicly accessible website functionality
- Authenticated administration functionality
- Customer-specific configuration management
- Shared backend services and data access

The administration application uses Angular Material alongside individually developed UI components.

Its internal architecture, implementation details, and proprietary components are not included in this public repository.

### 3. Backend and Data Management

The backend and data architecture is designed to support multiple independent tenants.

Core technologies include PostgreSQL and Supabase.

The backend provides the foundation for communication between the public websites and the administration application.

Key architectural considerations include:

- Tenant-specific data isolation
- Customer-specific configuration management
- Authentication and authorization
- Role-based access management
- PostgreSQL Row Level Security
- Structured and controlled data access
- Separation of routes, controllers, services, and repositories
- Secure media storage
- Integration with automation workflows

#### Multi-Tenant Architecture

StudioFlow is designed as a multi-tenant platform.

Each customer should be able to manage an individual website configuration while using the shared application infrastructure.

Tenant-specific data access and configuration management are designed to prevent unrelated customer data from being exposed across accounts.

The architecture is being developed with long-term maintainability, security, and scalability in mind.

---

## UI/UX and Design

StudioFlow combines Angular Material with individually developed interface components.

The public website and administration application follow different visual requirements while sharing consistent development principles.

### Public Website

The public website focuses on individual branding, visual presentation, and user experience.

Design priorities include:

- Custom visual identity
- Responsive layouts
- Clear content presentation
- Reusable website sections
- Individually developed UI elements
- Custom icons and visual effects
- Consistent interaction patterns

### Administration Interface

The administration application focuses on efficient workflows and practical business management.

Design priorities include:

- Clear information hierarchy
- Structured navigation
- Consistent Angular Material components
- Reusable administration interfaces
- Accessible interaction patterns
- Responsive application layouts
- Efficient content editing
- Practical workflows for everyday business operations

Custom UI elements and visual assets are developed specifically for StudioFlow.

Not all design components or implementations are included in this public repository.

---

## Development Principles

The development process emphasizes clean architecture, readability, maintainability, and separation of responsibilities.

### Frontend

- Angular standalone components
- TypeScript with explicit typing
- Component-based architecture
- SCSS using BEM conventions
- Reusable styles and shared design elements
- Separation of templates, styles, and component logic
- Modular application structure
- Separation of public and administrative applications
- Customer-specific configuration handling

### Backend

- Separation of responsibilities
- Routes, controllers, services, and repositories
- Parameterized database queries
- Typed interfaces and data structures
- Maintainable and focused functions
- Authentication and access control
- Tenant-specific data handling
- Security-conscious development practices

### General Approach

- Independent UI/UX development
- Incremental implementation of application modules
- Practical problem-solving
- Continuous testing and refinement
- Version control with Git
- Focus on real business requirements
- Long-term maintainability and extensibility

---

## Development Roadmap

StudioFlow is currently under active development.

The planned development sequence includes:

1. Complete the public website for individual freelancers.
2. Develop the public website variant for studios and businesses.
3. Connect both website models to StudioFlow Administration.
4. Implement customer-specific configuration synchronization.
5. Complete responsive optimization and mobile layouts.
6. Expand backend integrations and tenant management.
7. Prepare the platform for production deployment.

The administration application and selected backend modules are being developed alongside the public website.

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
- The technical development of a modular SaaS platform

### Important Notice

This repository does **not** contain the complete StudioFlow source code.

StudioFlow consists of multiple interconnected applications and backend services.

The public website is only one part of the overall platform.

The separate Angular Material administration application, internal backend implementations, and selected proprietary components are intentionally not published in this repository.

Additional excluded resources may include:

- Proprietary UI components and design systems
- Custom visual assets and icon implementations
- Internal business logic
- Customer-specific configuration mechanisms
- Security-related configuration
- Private application infrastructure

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
