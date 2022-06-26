module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "qy-sdk-easy.mini.js",
        library: {
            name: 'qy-sdk-easy',
            type: 'umd',
       
          },
    },
    module: {
       
    }
};
