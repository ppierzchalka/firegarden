FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@10.8.0 --activate

# Add libc6-compat for Alpine
RUN apk add --no-cache libc6-compat

# Copy the entire repo
COPY . .

# Build arguments for environment variables
ARG NEXT_PUBLIC_FIREBASE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ARG NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_FIREBASE_APP_ID
ARG GITHUB_USERNAME

# Set build environment variables
ENV NEXT_PUBLIC_FIREBASE_API_KEY=$NEXT_PUBLIC_FIREBASE_API_KEY
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=$NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID=$NEXT_PUBLIC_FIREBASE_PROJECT_ID
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=$NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=$NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIREBASE_APP_ID=$NEXT_PUBLIC_FIREBASE_APP_ID
ENV GITHUB_USERNAME=$GITHUB_USERNAME

# Install dependencies and build
RUN pnpm install --frozen-lockfile
RUN pnpm turbo build --filter=firegarden-front

# We're using a single-stage build for simplicity
# Set environment variable for Node environment
ENV NODE_ENV=production
ENV PORT=3000

# Runtime environment variables that can be changed at container start
ENV NEXT_PUBLIC_FIREBASE_API_KEY=""
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
ENV NEXT_PUBLIC_FIREBASE_APP_ID=""
ENV GITHUB_USERNAME=""

# Expose port
EXPOSE 3000

# Set working directory to the Next.js app
WORKDIR /app/apps/firegarden-front

# Run the Next.js application
CMD ["pnpm", "start"]
