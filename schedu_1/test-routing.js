const fs = require('fs');

console.log('Testing file structure...');

// Test loading screen
console.log('Testing Loading Screen...');
if (fs.existsSync('schedu_1/app/1-loading.tsx')) {
  console.log('✓ Loading screen file exists');
} else {
  console.log('✗ Loading screen file missing');
}

// Test login screen
console.log('Testing Login Screen...');
if (fs.existsSync('schedu_1/app/2-login.tsx')) {
  console.log('✓ Login screen file exists');
} else {
  console.log('✗ Login screen file missing');
}

// Test dashboard
console.log('Testing Dashboard...');
if (fs.existsSync('schedu_1/app/5-dashboard.tsx')) {
  console.log('✓ Dashboard file exists');
} else {
  console.log('✗ Dashboard file missing');
}

// Test assets
console.log('Testing Assets...');
const requiredAssets = ['ford-2-1.png', 'Battery.svg', 'Cellular Connection.svg', 'Wifi.svg'];
let allAssetsPresent = true;
requiredAssets.forEach(asset => {
  if (fs.existsSync(`schedu_1/assets/images/${asset}`)) {
    console.log(`✓ ${asset} exists`);
  } else {
    console.log(`✗ ${asset} missing`);
    allAssetsPresent = false;
  }
});

console.log('File structure test completed!');
