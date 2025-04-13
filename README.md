# Firegarden

This repository contains a starter pack for creating your own digital business card/resume with plans to expand into a digital garden. Fork this template, customize it, and deploy it to Netlify with your own custom domain.

## Project Architecture

This project is structured as follows:

- **Monorepo Tool**: Turborepo for efficient workspace management
- **Language**: TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS for utility-first styling
- **Framework**: Next.js for React-based frontend with dynamic rendering
- **UI Components**: shadcn/ui components with custom designs
- **Content Management** (Planned):
  - Firebase for database and image storage (to be implemented)
  - CMS application for content management (to be implemented)
  - Next.js frontend with read-only database access

## Project Structure

The repository is organized as a monorepo with the following applications:

1. **Frontend**: A Next.js application serving as the public-facing website
2. **CMS**: A content management system (currently in development)

When built, the applications are deployed to Netlify.

## Content Architecture

The site currently uses a static content approach, with plans for dynamic content:

- Currently using file-based content with plans to implement Firebase in the future
- Future implementation will include dynamic rendering for content changes without redeployment
- A dedicated CMS interface for content management is planned
- Role-based authentication will restrict CMS access to administrators only

## Security and Configuration

For security best practices when using this template:

- No sensitive information should be committed directly to the repository
- Environment variables should be managed through Netlify Environment Variables for production
- Local development should use a `.env.local` file (not committed to the repository)
- See [Next.js Environment Variables documentation](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables) for implementation details

## Planned Features

- Digital business card/resume (Phase 1)
- Digital garden for notes and thoughts (Phase 2)
- Portfolio section for projects (Phase 3)
- CMS for easier content management (Phase 4)

## Development

### Prerequisites

- Node.js
- pnpm (package manager)
- Netlify account for deployment

### Getting Started

1. Clone the repository
2. Create a `.env.local` file (see `.env.example` for required variables)
3. Install dependencies: `pnpm install`
4. Start development server: `pnpm dev`

### Deployment

The site is deployed to Netlify when changes are pushed to the main branch:

1. Netlify detects changes in the repository
2. Builds the Next.js application specified by the environment variable
3. Deploys to your custom domain configured in Netlify

## License

[MIT License](LICENSE)
