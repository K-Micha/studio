
# StudioFlow

**A white-label SaaS platform for freelancers and studios.**

StudioFlow is a personal software project I'm developing to help freelancers and small businesses manage their online presence and daily operations.

The idea comes from a simple problem: many independent professionals need a website, but managing content, services, appointments, and customer inquiries often involves several different tools.

With StudioFlow, I want to bring these tasks together in one platform.

The project primarily focuses on businesses in hairdressing, beauty, makeup artistry, tattooing, and photography.

> **Status:** In active development.
>
> This repository is a public showcase of selected parts of my work, not the complete StudioFlow application.

---

## Technology Stack

| Area | Technologies |
|---|---|
| Frontend | Angular 21, TypeScript |
| UI & Styling | Angular Material, SCSS, BEM |
| Database | PostgreSQL, Supabase |
| Authentication | Supabase Auth |
| Storage | Supabase Storage |
| Security | Row Level Security (RLS) |
| Automation | n8n |
| Version Control | Git, GitHub |

---

## How StudioFlow Works

StudioFlow is built around two separate Angular applications connected through a shared backend.

### Public Website

The public-facing website is what visitors and potential customers see.

It provides a customizable online presence for freelancers and studios, including:

- Service descriptions and offerings
- Image and video galleries
- Portfolio and showcase sections
- Multilingual content
- Individual website configurations
- Responsive layouts

I'm currently developing the freelancer website first, followed by a version for studios and larger businesses.

Both versions are intended to share the same underlying system while supporting different business requirements.

### Studio Administration

Behind the public website is a separate Angular application built with Angular Material.

This is where the actual management takes place.

Instead of editing website files manually, customers will be able to manage their content and business settings through an administration dashboard.

The administration system includes modules for:

- Website content
- Services and offers
- Images, videos, and galleries
- Appointments
- Customer inquiries
- Employees and teams
- Locations
- Language settings

The public website is designed to receive customer-specific configurations through the backend.

For example, changing a service or updating a gallery in the administration panel should eventually be reflected on the corresponding public website.

The goal is to keep the website and its management interface separate without requiring an entirely new application for every customer.

**The administration application is developed privately and is not included in this repository.**

### Backend

StudioFlow uses PostgreSQL and Supabase as part of its backend infrastructure.

The platform is being designed for multiple independent customers, each with their own content and configuration.

My focus is on keeping the frontend and backend responsibilities clearly separated while building a system that can be maintained and expanded over time.

---

## Design & Development

I design and develop the interfaces myself, combining Angular Material with custom components and SCSS.

I prefer building reusable components rather than repeating the same layout or logic across different pages.

Some of the principles I follow are:

- Angular standalone components
- Strongly typed TypeScript
- SCSS with BEM naming conventions
- Separation of HTML, styling, and application logic
- Reusable UI components
- Clear responsibilities between application layers
- Responsive design
- Practical and maintainable solutions

I also develop individual visual elements, including custom icons and interface effects.

Not all of these components are publicly available.

---

## Current Development

StudioFlow is still being built, and several parts of the platform are at different stages of development.

My current priorities are:

1. Finish the freelancer website.
2. Build the website variant for studios and businesses.
3. Connect both website models to Studio Administration.
4. Implement customer-specific configuration synchronization.
5. Complete responsive and mobile layouts.
6. Continue backend integration and prepare the platform for deployment.

Some administration modules and backend functionality are already under development.

This roadmap may change as the project progresses.

---

## About This Repository

I use this repository to show how I work with Angular, TypeScript, and SCSS while developing a larger application.

It gives an insight into my approach to component structure, frontend development, UI implementation, and project organization.

**This is not the complete StudioFlow source code.**

The public repository intentionally excludes parts of the application, including the private administration system, internal implementations, proprietary components, and selected configuration files.

As a result, the repository is not intended to be a fully functional or independently deployable version of StudioFlow.

It is primarily here to document my development work and demonstrate my technical skills.

---

## Copyright & License

**Copyright © 2026 Michael Kühn. All rights reserved.**

StudioFlow is proprietary software and is **not an open-source project**.

The source code and original designs published in this repository are provided for viewing and portfolio purposes only.

No permission is granted to copy, modify, redistribute, republish, commercially use, or create derivative works from protected original materials without prior written authorization, except where permitted by applicable law.

This also applies to unauthorized extraction or reproduction of protected implementations using AI systems or automated coding tools.

Public access to the repository does not grant a general license to reuse its proprietary code or original designs.

Third-party trademarks, logos, and other protected assets remain the property of their respective owners.

**License: Proprietary – All Rights Reserved.**

---

## Developer

**Michael Kühn**

Frontend Developer | Angular · TypeScript · SCSS

**Portfolio:** [michael-a-kuehn.de](https://michael-a-kuehn.de)

**GitHub:** [k-micha](https://github.com/k-micha)

---

*StudioFlow is an independent software project developed by Michael Kühn.*
