const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');  // 将webpack处理的静态资源，原样输出到指定目录下
const MiniCssExtractPlugin = require("mini-css-extract-plugin");   // 分离css文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');  // 引人vue-loader插件 （必须）


module.exports = {
    entry: {
        main: path.resolve(__dirname,"../src/main.js")
    },
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            /**
             * vue 配置
             */
            {
                test: /\.vue$/,
                use: "vue-loader",
                exclude: /node_modules/
            },
            /**
             * js代码配置
             */
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },

            /**
             * css 样式配置
             */
            {
                test: /\.less$/,
                use:[
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader'
                    : MiniCssExtractPlugin.loader,
                    {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2
                    }
                },
                    "less-loader",
                    "postcss-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass)$/,
                use:[
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader'
                    : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "sass-loader",
                    "postcss-loader"
                ],
                exclude: /node_modules/
            },
            /**
             * css 文件分开打包
             */
            {
                test: /\.css$/,
                use:[
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader'
                    : MiniCssExtractPlugin.loader,
                    // MiniCssExtractPlugin.loader,  // style-loader改用MiniCssExtractPlugin
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            // minimize: true,    // 是否压缩css代码
                            // module: true
                        }
                    },
                    "postcss-loader"
                ],
                exclude: /node_modules/
            },


            /**
             * 静态资源配置
             */
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1024 * 30,   //30KB 以下的文件采用 url-loader
                        fallback: "file-loader"  // 否则采用 file-loader，默认值就是 file-loader
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts"
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../src/index.html")
        }),
        /**
         * css分离插件
         */
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",     // [name]为chunk名称
            chunkFilename: "[id].css"
        }),
        /**
         * vue插件引人
         */
        new VueLoaderPlugin()
    ]
};
