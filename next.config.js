const path = require('path');

module.exports = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
        return config;
    },
};
