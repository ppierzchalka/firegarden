# Firegarden

This repository contains a starter pack for creating your own digital business card/resume with plans to expand into a digital garden. Fork this template, customize it, and deploy it to GitHub Pages with your own custom domain.

## Project Architecture

This project is structured as follows:

- **Monorepo Tool**: NX for efficient workspace management
- **Language**: TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS for utility-first styling
- **Framework**: Next.js for React-based frontend with dynamic rendering
- **UI Components**: shadcn/ui components with designs done on v0
- **Content Management**:
  - Firebase for database and image storage
  - FireCMS for content management with write permissions
  - Next.js frontend with read-only database access

## Project Structure

The repository is organized as a monorepo with the following applications:

1. **Frontend**: A Next.js application serving as the public-facing website
2. **CMS**: A FireCMS integration for content management (admin access only)

When built, both applications are bundled into a single deployable package for GitHub Pages.

## Content Architecture

The site uses a fully dynamic content approach:

- All content is fetched directly from Firebase at runtime
- Dynamic rendering ensures content changes do not require redeployment
- FireCMS provides a user-friendly interface for content management
- Role-based authentication restricts CMS access to administrators only

## Security and Configuration

This is a public repository, so all credentials and secrets are stored securely:

- No sensitive information is committed directly to the repository
- Environment variables and secrets are managed through GitHub Secrets
- Deployment is handled through GitHub Actions pipeline

This approach allows others to clone and reuse this project template without compromising security.

## Planned Features

- Digital business card/resume (Phase 1)
- Digital garden for notes and thoughts (Phase 2)
- Portfolio section for projects (Phase 3)

## Development

### Prerequisites

- Node.js (version specified in .nvmrc)
- Firebase account
- GitHub account for deployment

### Getting Started

1. Clone the repository
2. Create a `.env.local` file based on `.env.example`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. Builds the Next.js application
2. Generates the necessary deployment files
3. Deploys to the custom domain

## License

[MIT License](LICENSE)
