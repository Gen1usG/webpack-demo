const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // html插件
        new HtmlWebpackPlugin({
            // 生成html的title
            title: 'webpack-demo',
            // 生成html的模板
            template: 'src/index.html',
        })
    ]
};
