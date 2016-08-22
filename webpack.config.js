module.exports = {
    context: __dirname + '/src',
    entry: {
        javascript: './js/index.js',
        html: './index.html'
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "dist",
        port: 3000,
        inline: true
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                loader: "file?name=[path][name].[ext]"
            }
        ]
    }
}
