const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(baseConfig,{
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        hotOnly: true,
        // open: true,
        port: 3000,
        contentBase: "../dist"
    },
    plugins: [
    ]
});
