const path = require("path"); //依赖node来获取路径需要初始化 npm init生成package.json

//将入口文件和出口文件进行配置
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"), //resolve是将路径进行拼接
        filename: "bundle.js",
        publicPath: "dist/"
    },

    module: {
        rules: [{
                test: /\.css$/,
                //css-loader只负责将css文件进行加载，不负责解析
                //style-loader负责将样式添加到DOM中
                //使用多个loader时，是从右向左加载
                use: ["style-loader", 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            //             {
            //                 test: /\.(png|jpg|gif)$/,
            //                 use: [{
            //                     loader: 'url-loader',
            //                     options: {
            //                         //当加载的图片，小于limit时，会将图片编译成base64字符串形式
            //                         //当加载的图片，大于limit时，需要使用file-loader模块进行加载
            //                         limit: 52000,
            //                         /*
            //  图片处理的时候，webpack会在dist的文件中自动帮我们生成一个非常长的名字：这是一个32为的hash值
            // 目的是防止名字重复。但在真实开发中，可能对打包图片名字有一定的要求：比如将所有图片放在一个文件夹中，
            // 跟上图片原来的名字，同时也要防止重复。所以，我们可以在option中添加上如下选项：
            //     img：文件要打包到的文件夹、
            //     name：获取图片原来的名字，放在该位置、
            //     hash:8为了防止图片名称重复，依然使用hash，但是我们只保留8位、
            //     ext：使用图片原来的扩展名
            //                         */


            //                     }
            //                 }]
            //             }, 
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "img/[name].[hash:8].[ext]"
                    }
                }]
            },
            //es6-es5的配置
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                    options: {

                    }
                }]
            }

        ]
    },
    resolve: {
        //alias:别名
        alias: {
            //import vue文件的时候，会从vue/dist/vue.esm.js寻找，默认情况下
            //会使用vue.runtime.js,而vue/dist/vue.esm.js才包含runtime-compiler。
            "vue$": "vue/dist/vue.esm.js"
        }
    }
}