module.exports = {
    entry: './build/src/client/application.js',
    output: {
        path: './node/public/libs',
        filename: 'bundle.js',
        library: 'bundle'
    }
};