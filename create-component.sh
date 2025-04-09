#!/bin/bash

# Script to add an official shadcn UI component using the shadcn CLI
# Usage: ./create-component.sh component-name

if [ -z "$1" ]; then
  echo "Please provide a component name"
  echo "Usage: ./create-component.sh component-name"
  echo "Available components: https://ui.shadcn.com/docs/components"
  exit 1
fi

# Component name should be lowercase kebab-case for shadcn CLI
COMPONENT_NAME="$1"

# Directory where components will be added
COMPONENTS_DIR="packages/ui"

echo "Adding shadcn component: $COMPONENT_NAME to $COMPONENTS_DIR"

# Change to the components directory
cd "$COMPONENTS_DIR" || exit

# Use shadcn CLI to add the component
pnpm dlx shadcn@latest add "$COMPONENT_NAME"

# Get PascalCase name for logging
PASCAL_NAME=$(echo "$COMPONENT_NAME" | sed -r 's/(^|-)([a-z])/\U\2/g')

echo "✅ Component $PASCAL_NAME added successfully!"

# Go back to the project root
cd ../..

# Check if component was added to src/components/ui directly
if [ -f "packages/ui/src/components/ui/$COMPONENT_NAME.tsx" ]; then
  # Create directory for the component
  mkdir -p "packages/ui/src/components/ui/$COMPONENT_NAME"
  
  # Move the component file to its own directory
  mv "packages/ui/src/components/ui/$COMPONENT_NAME.tsx" "packages/ui/src/components/ui/$COMPONENT_NAME/"
  
  # Create an index file
  echo "export * from \"./$COMPONENT_NAME\";" > "packages/ui/src/components/ui/$COMPONENT_NAME/index.ts"
  
  echo "Organized component into its own directory: packages/ui/src/components/ui/$COMPONENT_NAME/"
fi

# Make sure it's exported in the main index file
if ! grep -q "export \* from \"./components/ui/$COMPONENT_NAME\";" "packages/ui/src/index.tsx"; then
  # Use sed to add the new export after the comment marker
  sed -i "/\/\/ Export all UI components here/a export * from \"./components/ui/$COMPONENT_NAME\";" "packages/ui/src/index.tsx"
fi

echo "✅ Component $PASCAL_NAME added successfully!"
echo "Next steps:"
echo "1. You can import it in your application like this: import { $PASCAL_NAME } from \"@repo/ui\";"
echo "2. Check the shadcn docs for usage examples: https://ui.shadcn.com/docs/components/$COMPONENT_NAME"
