const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 4400,
        watchFiles: ['src/**/*.html'],
        static: {
            directory: path.join(__dirname, 'dist'), // Указываем путь к каталогу для статическог соодержимого
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}

