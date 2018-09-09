'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	entry:{
		main:'./src/main.js'
	},
	output:{
		path:path.join(__dirname,'dist'),
		filename:'build.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'}
				]
				//loader:'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test:/\.less$/,
				use:[
					{loader:'style-loader!css-loader!autoprefixer-loader!less-loader'}
				]
				
			},
			{
				test:/\.(jpg|png|svg|ttf|woff2|gif|woff)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:4096,
							name:'[name].[ext]'
						}
					},
				]
				
			},
			{
				test:/\.js$/,
				exclude:/(node_modules|bower_components)/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015'],
						plugins:[
						'transform-runtime'
						]
					}
				}
				
			},
			{
				test:/vue-preview.src.*?js$/,
				use:{
					loader:'babel-loader',
					//自动引入 .babelrc 文件内容
				}
			},
			{
				test:/\.vue$/,
				use:[
					{loader:'vue-loader'}
				]
			
			},
		]
	
	},
	plugins:[
			new HtmlWebpackPlugin({
				template:'./src/index.html'
			})
		]
}
