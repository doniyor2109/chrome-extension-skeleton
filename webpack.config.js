var path = require("path"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    cssExtract = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    cleanWebpackPlugin = require("webpack-cleanup-plugin"),
    webpack = require("webpack");

var LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
//TODO put each path to variable
const projectPathRelative = "./src";
const projectPathAbs = path.resolve(projectPathRelative);

module.exports = {
    entry: {
        manifest: projectPathRelative + "/manifest.js",
        index: projectPathRelative + "/index.js",
        content: projectPathRelative + "/scripts/content",
        devtools_panel: projectPathRelative + "/scripts/devtools/devtools_panel.js",
        devtools: projectPathRelative + "/scripts/devtools",
        background: projectPathRelative + "/scripts/background"
    },
    resolve: {
        modules: ['node_modules','bower_components']
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build/dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: cssExtract.extract("css-loader")
            },
            {
                test: /\.(ttf|svg|woff(2)?|eot|png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "files/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader",

            },
            {
                test: /\.md/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "README.md"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new LoaderOptionsPlugin({
            options: {
                posthtml: {
                    plugins: [
                        require('posthtml-prefix-class')({
                             prefix:"EXTENSION-"
                        })
                ]
            }}
        }),
        new cssExtract("[name].css"),
        new HtmlWebpackPlugin({
            filename: "devtools_page.html",
            chunks: ["devtools_panel"]
        }),
        new HtmlWebpackPlugin({
            filename: "devtools.html",
            chunks: ["devtools"],
            template: projectPathRelative + "/templates/devtools/index.html"
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),
        new cleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: projectPathRelative + "/static" }
        ])
    ],
    devtool : 'source-map'
};