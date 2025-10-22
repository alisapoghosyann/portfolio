# Sanity CMS Integration Setup

This document provides instructions for setting up and using the Sanity CMS integration for your portfolio.

## Prerequisites

- Node.js installed
- Sanity account
- Project ID: `apxq2v89`
- Organization ID: `oe1khyr8j`

## Setup Instructions

### 1. Install Sanity CLI (if not already installed)
```bash
npm install -g @sanity/cli
```

### 2. Login to Sanity
```bash
sanity login
```

### 3. Set up Environment Variables
Create a `.env.local` file in your project root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=apxq2v89
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token_here
```

### 4. Get Sanity API Token
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to API settings
4. Create a new token with read/write permissions
5. Add it to your `.env.local` file

### 5. Populate Sanity with Initial Data
Run the data migration script to populate Sanity with your CV and portfolio data:

```bash
# Set the API token in your environment
export SANITY_API_TOKEN=your_sanity_api_token_here

# Run the population script
node scripts/populate-sanity.js
```

## Sanity Studio Setup (Optional)

If you want to set up Sanity Studio for content management:

### 1. Initialize Sanity Studio
```bash
npx create-sanity@latest --template clean --create-project "false" --dataset production --project-id apxq2v89
```

### 2. Configure Studio
Copy the schemas from `sanity/schemas/` to your studio's schema folder.

### 3. Run Studio
```bash
cd sanity-studio
npm run dev
```

## Data Structure

The following content types are available in Sanity:

### Personal Information
- Name, title, contact details
- Professional summary
- Languages and soft skills
- Years of experience

### Education
- Institution name
- Degree/program
- Period and description
- Display order

### Work Experience
- Job title and company
- Period and location
- Description and achievements
- Technologies used
- Featured status

### Projects
- Project title and description
- Technologies and category
- Live and GitHub URLs
- Featured status
- Display order

### Skills
- Skill name and proficiency level
- Description and category
- Display order

## ATS Optimization Features

The CV has been optimized for Applicant Tracking Systems (ATS) with:

### Keywords Integration
- React.js, Next.js, TypeScript
- Sanity, WordPress, Directus, Shopify
- Jest, Cypress, E2E Testing
- CMS Platforms, Testing Frameworks
- Performance optimization, accessibility

### Formatting
- Clean, ATS-friendly structure
- Standard section headers
- Consistent formatting
- No complex layouts or graphics

### Content Structure
- Professional summary with relevant keywords
- Detailed achievements with metrics
- Comprehensive technology listings
- Clear project descriptions with impact

## CV Download

The portfolio includes a CV download feature that:
- Generates an ATS-optimized PDF
- Includes all current data from Sanity
- Uses clean, professional formatting
- Contains all relevant keywords and achievements

## Maintenance

### Updating Content
1. Use Sanity Studio to update content
2. Or modify the data migration script and re-run it
3. The portfolio will automatically reflect changes

### Adding New Projects
1. Add project data to Sanity
2. Or update the fallback data in components
3. Ensure proper categorization and ordering

### Updating Skills
1. Add new skills to Sanity with proper categories
2. Update category mappings in Skills component if needed
3. Maintain consistent proficiency levels

## Troubleshooting

### Common Issues

1. **Data not loading**: Check API token and project ID
2. **CORS errors**: Ensure proper Sanity configuration
3. **Missing data**: Run the population script
4. **Build errors**: Check TypeScript types and imports

### Fallback Data
All components include fallback data that will be used if Sanity is unavailable, ensuring the portfolio always works.

## Support

For issues with Sanity integration:
1. Check Sanity documentation
2. Verify API credentials
3. Check network connectivity
4. Review console errors

The portfolio is designed to work with or without Sanity, providing a seamless experience in all scenarios.

