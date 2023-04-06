# 启动

`npm install`   OR   `yarn`



# 前言

该模板是由以下技术组成封装的模板

- React18
- React-router-dom6
- react-redux
- sass
- Antd5
- Axois

# 特点

- [ ] 封装了axios，集成了**请求拦截**和**响应拦截**以及解决了**跨域问题**
- [ ] 封装了redux，规范用法，易于管理
- [ ] 封装了react-router文件，易于管理路由文件
- [ ] 直接进行二次开发，快捷高效

# Redux使用

# 使用redux

## 安装插件

react-redux

redux:(react-redux需要依赖于redux的store)

## 配置store

在src文件下，新建一个store的文件夹，里面需要有以下文件：

- reducers文件夹（存放要完成的工作，本质上是一个函数）
- actions 文件夹(存放要完成工作需要准备的东西，本质上是一个函数)
- actionsTypes文件夹（统一管理actions的动作类型）
- index.js

![image-20221017094128679](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221017094128679.png)

### index.js（模板）

模板（可以直接复制使用）

```
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
```

## reducers

- index.js(统一管理所有的reduces)
- 动作.js(名字按照你要执行的工作来命名)，例如add.js

![image-20221017094249504](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221017094249504.png)

#### index.js(模板)

```
import { combineReducers } from "redux";
import a from "./a";
import b from "./b";
import xml from "./xmlForm";
import xmlModifyForm from "./xmlModifyForm";
export default combineReducers({
    a,
    b,
    xml,
    xmlModifyForm
  });
```

引入所有的动作文件并统一的暴露出去

#### a.js

```
import * as types from "../actionTypes"
const initState = {
    name: "xiaoming"
}

export default function a(state = initState, action) {
    switch (action.type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: action.params,
            };

        default:
            return state;
    }
}
```

接收两个参数，一个是初始值状态state,另一个是要完成的动作

## action

#### index.js(模板)

```
import {changeName} from "./a"
import {changeAge} from "./b"
import {changeXml,changeXmlModify} from "./xmlForm"

export {
    changeName,
    changeAge,
    changeXml,
    changeXmlModify
}
```

接收所有动作文件的动作，并统一暴露出去

#### a.js

```
import * as types from "../actionTypes";

export const changeName = (params) => {
    return {
      type: types.CHANGE_NAME,
      params
    };
  }
```

**注意：return后面一定要跟花括号，否则报错**

## actionTypes(可以不要)

#### index.js

```
import {CHANGE_NAME} from "./a";
import {CHANGE_AGE} from "./b";
import {CHANGE_XML,CHANGE_XML_Modify} from "./xmlForm";

export {
    CHANGE_NAME,
    CHANGE_AGE,
    CHANGE_XML,
    CHANGE_XML_Modify
}
```

#### a.js

```
export const CHANGE_NAME =  "CHANGE_NAME"


```

## 重要

在App.js中

```
import { Provider } from 'react-redux';
import store from "./store";
render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>

    );
  }

```



## 使用

### 接收方

使用useSelector

```
import { useSelector } from 'react-redux'
const A = useSelector((state) =>state.a)
```

useSelector(state=>state.reducers中的文件名)，然后使用一个变量去接收

这样变量就能拿到store里面对应文件中的所有状态



### 发送方

```
import { useDispatch } from 'react-redux'
import { changeXmlModify } from '../../../../store/actions'
const dispatch = useDispatch()
dispatch(changeXmlModify(参数))
```

useDispatch(action名称（参数）)

# 使用Router

该项目已经配置好了路由，请直接在router文件夹中的index.js中配置路由即可

## LazyLoad

由于Router6替换了react.lazy方法，再次使用会提示警告，必须配合个`React.Suspense`，因此手动封装一个lazyLoad进行使用



注意规则：

`const Compoent = React.lazy(() => import('../views'+path));`

## index.js

使用uesRoutes方法，在里面进行路由配置即可。

# 封装请求

可以看utils文件夹中的request.js，这里封装了请求拦截和响应拦截，可以根据你的业务需求增加或删除

# 跨域解决

在setupProxy.js文件中，解决跨域问题，使用`http-proxy-middleware`

```
  //本地跨域
  app.use(
    createProxyMiddleware("/api/xxxxx", {   //根据请求前缀进行判断
      target: "xxxxxxxx",   //代理的域名地址
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api": "",
      },
      onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader('cookie', 'PHPSESSID=pbenl2egj2s27pvknbq12u8ocl');     //参数
      }
    }),
  );
};

```



该项目使用了最新的antd组件，如果不想使用最新版本，可以重新安装依赖即可





