#!/bin/bash

# Check if component name is provided
if [ -z "$1" ]; then
  echo "Please provide a component name"
  echo "Usage: ./install-shadcn-component.sh button"
  exit 1
fi

# Convert component name to lowercase for folder name
COMPONENT_NAME=$1
COMPONENT_FOLDER_NAME=$(echo $COMPONENT_NAME | tr '[:upper:]' '[:lower:]')

echo "🔍 Preparing to install $COMPONENT_NAME component..."

# Change directory to the packages/ui folder
cd packages/ui || { echo "Failed to change to packages/ui directory!"; exit 1; }

# Install the component using shadcn CLI
echo "📦 Installing $COMPONENT_NAME component using shadcn CLI..."
pnpm dlx shadcn@latest add $COMPONENT_NAME

# Check if the component file exists
if [ ! -f "components/ui/$COMPONENT_NAME.tsx" ]; then
  echo "❌ Component was not found at components/ui/$COMPONENT_NAME.tsx"
  echo "   This may indicate an issue with the shadcn CLI or the components.json configuration."
  cd - > /dev/null  # Go back to original directory
  exit 1
fi

# Set the source file path
COMPONENT_SOURCE="components/ui/$COMPONENT_NAME.tsx"

echo "📁 Renaming ui folder to $COMPONENT_FOLDER_NAME..."

# Fix import paths for the component
sed -i 's|import { cn } from "@/lib/utils"|import { cn } from "../../lib/utils"|g' "$COMPONENT_SOURCE"
sed -i 's|from "@/components|from "../../components|g' "$COMPONENT_SOURCE"

# Move the ui folder to component folder name (rename it)
if [ -d "components/ui" ]; then
  # If component specific folder already exists, just move the component file
  if [ -d "components/$COMPONENT_FOLDER_NAME" ]; then
    mv "$COMPONENT_SOURCE" "components/$COMPONENT_FOLDER_NAME/$COMPONENT_NAME.tsx"
  else
    # Rename the ui folder to the component name
    mv "components/ui" "components/$COMPONENT_FOLDER_NAME"
  fi
else
  echo "❌ components/ui directory not found."
  exit 1
fi

echo "📝 Creating barrel export file..."
# Create barrel export file
echo "export * from './$COMPONENT_NAME';" > "components/$COMPONENT_FOLDER_NAME/index.ts"

echo "🔄 Updating main index.ts to export the component..."
# Update the main index.ts file to export the new component
# Check if there's already an export for this component folder
if ! grep -q "export \* from \"./components/$COMPONENT_FOLDER_NAME\";" index.ts; then
  # Add the export before the utilities export section
  sed -i "/\/\/ Export utilities/i export * from \"./components/$COMPONENT_FOLDER_NAME\";" index.ts
fi

echo "✅ Component $COMPONENT_NAME has been installed and configured:"
echo "  - Created folder at components/$COMPONENT_FOLDER_NAME"
echo "  - Added barrel export file"
echo "  - Updated main index.ts"

# Go back to the root directory
cd - > /dev/null

echo "✨ Component installation complete!"