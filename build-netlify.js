const { execSync } = require('child_process');

process.env.NEXT_PUBLIC_PLATFORM = 'netlify';

try {
    console.log('Building for Netlify...');
    execSync('next build && next export', { stdio: 'inherit' });
    console.log('Netlify build completed successfully!');
} catch (error) {
    console.error('Netlify build failed:', error);
    process.exit(1);
}
