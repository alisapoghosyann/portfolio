#!/bin/bash

# Sanity Setup Script for Portfolio
echo "🚀 Setting up Sanity CMS integration for your portfolio..."

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
NEXT_PUBLIC_SANITY_PROJECT_ID=apxq2v89
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token_here
EOF
    echo "✅ Created .env.local file"
    echo "⚠️  Please update SANITY_API_TOKEN with your actual token from sanity.io/manage"
else
    echo "✅ .env.local already exists"
fi

# Check if Sanity CLI is installed
if ! command -v sanity &> /dev/null; then
    echo "📦 Installing Sanity CLI..."
    npm install -g @sanity/cli
    echo "✅ Sanity CLI installed"
else
    echo "✅ Sanity CLI already installed"
fi

echo ""
echo "🔧 Next steps:"
echo "1. Get your API token from https://sanity.io/manage"
echo "2. Update SANITY_API_TOKEN in .env.local"
echo "3. Run: node scripts/populate-sanity.js"
echo ""
echo "📚 For detailed instructions, see SANITY_SETUP.md"
echo ""
echo "🎉 Setup complete! Your portfolio is ready to use Sanity CMS."

