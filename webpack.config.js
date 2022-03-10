const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = process.env.NODE_ENV === "production" ? "production" : "development"
let target = process.env.NODE_ENV === "production" ? "browserslist": "web"

module.exports = {
    mode: mode,
    plugins: [ new MiniCssExtractPlugin() ],
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/,
                exclude: /node_modules/,
                use: [
                    // { loader: "style-loader" },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use : [
                    { loader: "babel-loader" }
                ]
            }
        ]
    },

    target: target,
    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true   
    }
}           
