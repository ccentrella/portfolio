const { build } = require('esbuild');
const fs = require('fs');

// If in development mode, load .env variables into process.env
const devEnvPath = '.env.development';
if (fs.existsSync(devEnvPath)) {
    require('dotenv').config({ path: devEnvPath });
}

const args = process.argv.slice(2);
const options = {
    entryPoints: ['app/javascript/application.js'],
    outdir: 'app/assets/builds/',
    publicPath: '/assets',
    logLevel: 'info',
    bundle: true,
    minify: true,
    sourcemap: true,
    watch: args.includes('--watch'),
    loader: {
        '.js': 'jsx',
        '.png': 'file',
        '.jpg': 'file',
        '.svg': 'file',
    },
    define: {
        RECAPTCHA_SITE_KEY_V3: JSON.stringify(process.env.RECAPTCHA_SITE_KEY_V3),
    },
};

build(options).catch(() => process.exit(1));
