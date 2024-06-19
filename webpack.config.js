const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

const ruleForJavaScript = {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
            presets: [
                [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
                ]
            ],
        },
    }


const rules = [ ruleForJavaScript,ruleForStyles];

module.exports = {
    //entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    plugins:[
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    module: {
        rules: rules ,
    },
    devServer: {
        open: true, // Open the page in browser
        port: 3000,
        liveReload: true, // Reload the page when the file changes
        //contentBase: path.join(__dirname, 'build'), // Serve from the build folder
        compress: true // Enable gzip compression
        
    },
    //devtool: 'source-map'
}


