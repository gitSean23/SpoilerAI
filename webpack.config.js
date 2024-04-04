const path = require('path');

module.exports = {
    entry: { app: './src/index.tsx', contentScript: './src/contentScript.ts', background: './src/background.ts' }, // Your main entry point
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
