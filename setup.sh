#!/bin/bash

# Portfolio Setup Script
# This script helps you get started with your portfolio

echo "🚀 Setting up your portfolio..."
echo ""

# Check Node.js version
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✓ Node.js $NODE_VERSION detected"
else
    echo "✗ Node.js not found. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

# Install dependencies
echo ""
echo "📥 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully"
else
    echo "✗ Failed to install dependencies"
    exit 1
fi

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo ""
    echo "📝 Creating .env.local file..."
    cat > .env.local << 'EOF'
# Email Configuration (Optional)
# Uncomment and configure if you want to enable email sending

# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your-email@gmail.com
# SMTP_PASSWORD=your-app-password
EOF
    echo "✓ .env.local created"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Customize your content:"
echo "   - Update contact links in components/Contact.tsx"
echo "   - Edit projects in data/projects.json"
echo "   - Modify experience in components/Experience.tsx"
echo ""
echo "2. Start the development server:"
echo "   npm run dev"
echo ""
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "4. When ready to deploy:"
echo "   - Run: npm run build (to test production build)"
echo "   - Deploy: vercel (using Vercel CLI)"
echo "   - Or push to GitHub and import in Vercel dashboard"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Full documentation"
echo "   - QUICKSTART.md - Quick start guide"
echo "   - DEPLOYMENT.md - Deployment instructions"
echo "   - PROJECT_OVERVIEW.md - Technical overview"
echo ""
echo "Happy coding! 🎉"

