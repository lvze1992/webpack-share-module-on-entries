1. `npm i`
2. `npm run webpack`
3. open `http://localhost:8080/` 
4. open Chrome devtool see the `console`:

```
This is math.js!
index 3
This is math.js!
index2 3
```

We see `This is math.js!` twice, but i hope to see only once.

5. `npm run browser`
6. open Chrome devtool see the `console`:

```
This is math.js!
index 3
index2 3
```
### Why?

ES6 import is static, it is the some object no matter how many times it is imported.

But webpack make it to be a new object every time it is imported be different entries.


### Answer
Dll（动态链接库），使用dll技术对某些库进行单独打包。
（第三方库react，vue 或自定义入口文件）
运行如下命令：
0. npm i webpack webpack-cli -g
1. webpack --config webpack.dll.js
2. webpack


