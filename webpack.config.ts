import * as Webpack from "webpack";

export default {
    entry: "./index.ts",
    output: {
        path: "./public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader?instance=jsx",
                exclude: /node_modules/
            }
        ]
    }
};
