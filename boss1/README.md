# boss1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



项目功能梳理
在创建项目之前，我们先理一下整个项目的功能模块。
登录模块
1.用户输入用户名及密码，调用接口
  1.1用户名未找到，提示用户“用户名不存在”
  1.2用户名找到，但密码不匹配，提示用户“密码输入错误”
  1.3用户名和密码都匹配，登录成功并跳转到主页，同时将用户名存为cookie
2.加载主页获取cookie
  2.1cookie不存在，跳转到登录页
  2.2cookie存在，显示用户名
  2.3点击注销，删除cookie并跳转到登录页
3.管理员登录
  3.1输入管理员用户名及密码，跳转到管理页
注册模块
1.用户输入用户名及密码，调用接口
  1.1注册成功直接跳转到登录页

项目整体文件结构如下
vue
    build
    config
    node
    src 
        assets
            js 
                cookie.js
        components
        router
        views
            home
                home.vue
            login
                login.vue
            main
                main.vue
            app.vue
            main.js
        
    static

cookie.js为公共方法，用于cookie的存储、获取及删除
home.vue为用户登录成功之后的主页
login.vue为登录注册页
main.vue为后台管理页
                