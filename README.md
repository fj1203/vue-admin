


## Build Setup
``` bash
npm install

# 修改文件内容/build/webpack.base.conf.js，将element-ui和vuex-router-sync版本替换成install后node_modules目录中当前版本，注意不能用软链
#      {
#        test: /\.js$/,
#        loader: 'babel-loader',
#        //exclude: /(node_modules|bower_components)/,
#        // 注意elementUI的源码使用ES6需要解析
#        include: [
#          resolve('src'),
#          resolve('test'),
#          resolve('/node_modules/.1.4.8@element-ui/src'),
#          resolve('/node_modules/.1.4.8@element-ui/packages'),
#          resolve('/node_modules/.4.3.0@vuex-router-sync')
#        ]
#      },


# serve with hot reload at localhost:9000
npm run dev
npm run build

npm run mock
```

1. **启动mock服务**
npm run mock
2. **启动dev server**
npm run dev


## 页面截图

<p><img src="https://github.com/fj1203/vue-admin/blob/master/static/data/assetImage.png" /></p>
<p><img src="https://github.com/fj1203/vue-admin/blob/master/static/data/index.png" /></p>
<p><img src="https://raw.githubusercontent.com/lanux/Vue-Admin/master/static/data/dash.png?t=1" /></p>
<p><img src="https://github.com/fj1203/vue-admin/blob/master/static/data/roal.png" /></p>
<p><img src="https://github.com/fj1203/vue-admin/blob/master/static/data/user.png" /></p>
