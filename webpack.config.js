const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/assets/js-modules/App.js",
    output: {
        path: path.join(__dirname, "./src/temp/js"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};
