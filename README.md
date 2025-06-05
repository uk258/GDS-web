功能：
    1. 注册：注册页面注册后数据存入db.json中
    2. 登录：提交登陆时若与db.json中对象匹配，则登录成功，跳转到学校官网
    3. 忘记密码：忘记密码功能支持输入已存在的用户名，去对密码重新赋值。



1.启动db.json

    json-server --watch db.json



2.修改db.json对应的网址

    在src/config.js中将USER_API_URL = "http://localhost:3000/users"一行修改成新的db.json启动端口



3.运行脚手架

    npm start