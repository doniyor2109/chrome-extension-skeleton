var path = require("path");
const Crx = require("crx-webpack-plugin");
const cleanWebpackPlugin = require("webpack-cleanup-plugin");

//TODO make config file that stores build path and others
module.exports = {
    entry: "./build/dist/index.js",
    output:{
        path: path.resolve(__dirname, "build/output"),
        filename: "[name]"
    },
    plugins: [
        new Crx({
            keyFile: './build/key.pem',
            contentPath: './build/dist',
            outputPath: './build/output',
            name: 'EXTENSION_NAME'
        })
        , new cleanWebpackPlugin()
    ]
};