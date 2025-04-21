<div align="center">
  <img src="apps/firegarden-cms/public/firecms.svg" alt="Firegarden Logo" width="100" height="100">
  <h1>Firegarden</h1>
</div>

This repository contains a starter pack for creating your own digital business card/resume with plans to expand into a digital garden. Fork this template, customize it, and deploy it to Netlify with your own custom domain.

## Project Architecture

This project is structured as follows:

- **Monorepo Tool**: Turborepo for efficient workspace management
- **Language**: TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS for utility-first styling
- **Frontend**: Next.js for React-based frontend with dynamic rendering
- **CMS**: React app built with Vite for content management
- **UI Components**: shadcn/ui components with custom designs
- **Database**: Firebase for data storage and authentication
- **Deployment**: Netlify for hosting and continuous deployment

## Project Structure

The repository is organized as a monorepo with the following applications:

1. **Frontend (firegarden-front)**: A Next.js application serving as the public-facing website
2. **CMS (firegarden-cms)**: A React/Vite-based content management system using FireCMS

When built, the applications are deployed to Netlify.

## Content Architecture

This project uses Firebase for content management:

- **Firebase Database**: Stores all content displayed on the frontend
- **FireCMS**: Provides an intuitive interface for managing content
- **Role-based Access**: Only authorized administrators can access the CMS
- **Collections**: Content is organized into structured collections (defined in `firegarden-cms/src/collections/`)
- **Public Access**: The frontend has read-only access to all content
- **Admin-only Writes**: Only authorized admins can modify content

## Firebase Setup

### Firebase Configuration

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database and Authentication (with Google or your preferred providers)
3. Copy your Firebase configuration to the appropriate `.env` files (see Environment Setup below)

### Firestore Security Rules

Configure your Firestore security rules to ensure proper access control:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Publicly readable whitelist, only editable from Firebase Console
    match /admin/cms_access {
      allow read: if true; // public read access
      allow write: if false; // block all client writes
    }

    // All other documents
    match /{document=**} {
      // Public read
      allow read: if true;

      // Only allow writes if user is authenticated AND their email is in the admin list
      allow write: if request.auth != null &&
                   request.auth.token.email in get(/databases/$(database)/documents/admin/cms_access).data.authorizedEmails;
    }
  }
}
```

These rules ensure:

- Everyone can read all content (needed for the frontend)
- Only authorized administrators can write/modify content
- The admin access list can only be modified through Firebase Console

### Required Admin Document

Create a document in your Firestore database to control CMS access:

1. Collection: `admin`
2. Document ID: `cms_access`
3. Field: `authorizedEmails` (array of strings)
4. Add your admin email addresses to the array

Example:

```
{
  "authorizedEmails": ["your.email@example.com", "another.admin@example.com"]
}
```

Only users with emails in this list will be able to access the CMS.

## Collections Configuration

All content in Firegarden is structured into collections that define the schema for your content. These collections are defined in the `firegarden-cms/src/collections/` directory.

### Available Collections

The CMS comes with several pre-configured collections:

- **Site Config**: Basic site settings (title, description, etc.)
- **App**: Application settings and metadata
- **Blog**: Blog posts and articles
- **Experience**: Work and educational experience
- **Interests**: Personal or professional interests

You can modify these collections or add new ones by editing the files in the collections directory. Each collection defines:

- Field types and validation
- Display options in the CMS
- Relationships between collections

### Customizing Collections

To customize a collection, edit its corresponding file in `firegarden-cms/src/collections/`. For example, to modify the blog collection, edit `blog.tsx`.

## Environment Setup

Both applications require environment variables for proper configuration. Example files are provided for reference.

### Frontend Environment (.env.local)

Create a `.env.local` file in the `apps/firegarden-front` directory with the following variables:

```
# Firebase Configuration
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id

# GitHub Integration (optional)
GITHUB_USERNAME=your-github-username
```

### CMS Environment (.env)

Create a `.env` file in the `apps/firegarden-cms` directory with the following variables:

```
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Note the different prefixes for environment variables: Next.js uses no prefix for server-side variables, while Vite requires the `VITE_` prefix.

## Security and Configuration

For security best practices when using this template:

- No sensitive information should be committed directly to the repository
- Environment variables should be managed through Netlify Environment Variables for production
- Local development should use appropriate environment files (not committed to the repository)
- Frontend app's environment variables should be configured in Netlify for the production site

## Deployment to Netlify

This project is configured for deployment to Netlify using the `netlify.toml` file in the root directory.

### Deployment Configuration

The deployment process:

1. Uses Turborepo to build the selected application
2. Supports both Next.js (frontend) and Vite (CMS) build outputs
3. Deploys the appropriate files based on the `SITE_APP` environment variable

### Setting Up Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Configure environment variables in Netlify settings:
   - For the frontend site, no `SITE_APP` variable is needed
   - For the CMS site, set `SITE_APP=cms`
3. Add your Firebase environment variables to Netlify settings
4. Deploy from the main branch

### Custom Domains

To use a custom domain:

1. Configure your domain in Netlify's domain settings
2. Set up DNS records as instructed by Netlify
3. Enable HTTPS (Netlify provides free SSL certificates)

## Development

### Prerequisites

- Node.js 18 or later
- pnpm (package manager)
- Firebase account
- Netlify account for deployment

### Getting Started

1. Clone the repository
2. Create environment files as described in the Environment Setup section
3. Install dependencies: `pnpm install`
4. Start development:
   - For frontend: `pnpm --filter firegarden-front dev`
   - For CMS: `pnpm --filter firegarden-cms dev`
   - For both: `pnpm dev`

### Customizing the Frontend

The frontend application can be customized to match your preferences:

- Modify the design in `apps/firegarden-front/app`
- Update components in the UI package (`packages/ui/components`)
- Add new pages by creating new directories in the `app` folder
- Customize Tailwind configuration in `packages/tailwind-config`

### Customizing the CMS

The CMS is built using FireCMS and can be customized:

- Modify authentication logic in `apps/firegarden-cms/src/App.tsx`
- Update collection schemas in `apps/firegarden-cms/src/collections/`
- Add new features by extending the FireCMS components

## License

[MIT License](LICENSE)
