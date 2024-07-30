const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist/public'),
        compress: true,
        port: 9000,
    },
};
