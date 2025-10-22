const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertCVToPDF() {
  console.log('🚀 Converting ATS-optimized CV to PDF...');
  
  try {
    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, '../public/cv-ats-optimized.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set content and wait for it to load
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Generate PDF with ATS-friendly settings
    const pdfPath = path.join(__dirname, '../public/Alisa_Poghosyan_CV.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      tagged: true,
      outline: false
    });
    
    await browser.close();
    
    console.log('✅ CV successfully converted to PDF!');
    console.log(`📄 New CV saved as: ${pdfPath}`);
    console.log('');
    console.log('🎯 ATS Optimizations Applied:');
    console.log('   ✓ Enhanced with latest keywords (Sanity, WordPress, Directus, Shopify)');
    console.log('   ✓ Added testing frameworks (Jest, Cypress, E2E Testing)');
    console.log('   ✓ Quantified achievements with metrics');
    console.log('   ✓ Updated to "Senior Frontend Developer" title');
    console.log('   ✓ Improved project descriptions with impact');
    console.log('   ✓ ATS-friendly formatting and structure');
    console.log('   ✓ Comprehensive technology listings');
    console.log('   ✓ Hidden ATS keywords for better parsing');
    console.log('');
    console.log('📋 Your CV is now optimized for:');
    console.log('   • Applicant Tracking Systems (ATS)');
    console.log('   • Candidate Parsing Systems (CPS)');
    console.log('   • Automated screening processes');
    console.log('   • Keyword matching algorithms');
    console.log('   • Resume parsing software');
    
  } catch (error) {
    console.error('❌ Error converting CV to PDF:', error);
    console.log('');
    console.log('🔄 Alternative method:');
    console.log('   1. Open public/cv-ats-optimized.html in your browser');
    console.log('   2. Press Ctrl+P (or Cmd+P on Mac)');
    console.log('   3. Select "Save as PDF"');
    console.log('   4. Save as public/Alisa_Poghosyan_CV.pdf');
  }
}

// Run the conversion
convertCVToPDF();
