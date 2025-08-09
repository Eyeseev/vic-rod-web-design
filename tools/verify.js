import { readFileSync } from 'fs';
import { join } from 'path';

console.log('🔍 Verifying website implementation...\n');

// Check if favicon PNGs exist
const faviconSizes = [32, 180, 192, 512];
let faviconCount = 0;

for (const size of faviconSizes) {
  const filename = size === 180 ? 'apple-touch-icon.png' : size === 32 ? 'favicon-32x32.png' : `favicon-${size}.png`;
  const path = join('assets', filename);
  try {
    const stats = readFileSync(path);
    console.log(`✅ ${path} exists (${stats.length} bytes)`);
    faviconCount++;
  } catch (error) {
    console.log(`❌ ${path} missing`);
  }
}

// Check if project SVGs exist
const projectFiles = ['therapist-practice.svg', 'creative-portfolio.svg', 'local-service.svg'];
let projectCount = 0;

for (const file of projectFiles) {
  const path = join('assets', 'projects', file);
  try {
    const stats = readFileSync(path);
    console.log(`✅ ${path} exists (${stats.length} bytes)`);
    projectCount++;
  } catch (error) {
    console.log(`❌ ${path} missing`);
  }
}

// Check if key files exist
const keyFiles = ['vercel.json', 'robots.txt', 'sitemap.xml', '404.html', '.github/workflows/quality.yml'];
let keyFileCount = 0;

for (const file of keyFiles) {
  try {
    const stats = readFileSync(file);
    console.log(`✅ ${file} exists (${stats.length} bytes)`);
    keyFileCount++;
  } catch (error) {
    console.log(`❌ ${file} missing`);
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Favicons: ${faviconCount}/${faviconSizes.length}`);
console.log(`   Project images: ${projectCount}/${projectFiles.length}`);
console.log(`   Key files: ${keyFileCount}/${keyFiles.length}`);

if (faviconCount === faviconSizes.length && projectCount === projectFiles.length && keyFileCount === keyFiles.length) {
  console.log('\n🎉 All files present! Website is ready for deployment.');
} else {
  console.log('\n⚠️  Some files are missing. Check the output above.');
}
