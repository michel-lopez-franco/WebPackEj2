const path = require('path');

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


const rules = [ ruleForJavaScript];

module.exports = {
    //entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: rules ,
    },
}


