#!/bin/bash

# Check if component name is provided
if [ -z "$1" ]; then
  echo "Please provide a component name"
  echo "Usage: ./install-shadcn-component.sh button"
  exit 1
fi

COMPONENT_NAME=$1

# Change directory to the packages/ui folder
cd packages/ui

echo "Installing $COMPONENT_NAME component using shadcn CLI..."
# Install the component using shadcn CLI
pnpm dlx shadcn@latest add $COMPONENT_NAME

# Create the proper directory if it doesn't exist
mkdir -p components/$COMPONENT_NAME

# Check if the component was created in the ui subdirectory
if [ -f "components/ui/$COMPONENT_NAME.tsx" ]; then
  # Fix import paths based on components.json aliases
  sed -i 's|import { cn } from "@/lib/utils"|import { cn } from "../../lib/utils"|g' components/ui/$COMPONENT_NAME.tsx
  
  # Move the component to the correct location
  mv components/ui/$COMPONENT_NAME.tsx components/$COMPONENT_NAME/$COMPONENT_NAME.tsx
  
  # Create barrel export file
  echo "export * from './$COMPONENT_NAME';" > components/$COMPONENT_NAME/index.ts
  
  echo "Component $COMPONENT_NAME has been installed and moved to the correct location."
  echo "Created barrel export file at packages/ui/components/$COMPONENT_NAME/index.ts"
else
  echo "Component was not found in the expected location."
  cd - > /dev/null  # Go back to original directory
  exit 1
fi

# Go back to the root directory
cd - > /dev/null

echo "✅ Component installation complete!"