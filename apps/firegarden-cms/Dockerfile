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
ARG VITE_FIREBASE_API_KEY
ARG VITE_FIREBASE_AUTH_DOMAIN
ARG VITE_FIREBASE_PROJECT_ID
ARG VITE_FIREBASE_STORAGE_BUCKET
ARG VITE_FIREBASE_MESSAGING_SENDER_ID
ARG VITE_FIREBASE_APP_ID

# Set build environment variables
ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY
ENV VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN
ENV VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID
ENV VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET
ENV VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID
ENV VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID

# Install dependencies and build
RUN pnpm install --frozen-lockfile
RUN pnpm turbo build --filter=firegarden-cms

# Production stage
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Copy the built app from the builder stage
COPY --from=0 /app/apps/firegarden-cms/dist/ .
COPY apps/firegarden-cms/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
