const { execSync } = require('child_process');

process.env.NEXT_PUBLIC_PLATFORM = 'github';

try {
    console.log('Building for GitHub...');
    execSync('next build && next export', { stdio: 'inherit' });
    console.log('GitHub build completed successfully!');
} catch (error) {
    console.error('GitHub build failed:', error);
    process.exit(1);
}
