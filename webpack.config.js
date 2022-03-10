const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = process.env.NODE_ENV === "production" ? "production" : "development"
let target = process.env.NODE_ENV === "production" ? "browserslist": "web"

module.exports = {
    mode: mode,

    output: {
       assetModuleFilename: "images/[hash][ext][query]" 
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/, 
                type: "asset",    
                // type: "asset/resource",
                // type: "asset/inline"

                // parser: { 
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024,  
                //     }
                // }
            },
            {
                test: /\.(s[ac]|c)ss$/,
                exclude: /node_modules/,
                use: [
                    // { loader: "style-loader" },
                    { 
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: ""  },
                    },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use : [
                    { loader: "babel-loader" }
                ]
            }
        ]
    },

    plugins: [ new MiniCssExtractPlugin() ],

    resolve: {
        extensions: [ ".js", ".jsx" ],
    },

    target: target,
    
    devtool: "source-map",
    
    devServer: {
        static: "./dist",
        hot: true   
    }
}           
