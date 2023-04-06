import React,{useState} from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from '../Home'
import './index.scss'

function TestRouter() {

    const [html,sethtml] = useState(`
    import React from "react";
    import { BrowserRouter, Route, Routes } from "react-router-dom";
    import Home from "../home/Home";
    import Goods from "../goods/Goods";
    import Customer from "../customer/Customer";
    
    export default function Router() {
      {/* 所有的路由配置均在 BrowserRouter 内部 */}
      return (
        <BrowserRouter>
    
          {/* 使用 Routes 替换曾经的 Switch */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='goods' element={<Goods />} />
            <Route path='customer' element={<Customer />} />
          </Routes>
        </BrowserRouter>
      );
    }`)




    return ( 
        <div>
            普通路由的方式<br/>
         <pre className="code">
            <code >
            {html}
            </code>
         </pre>
        </div>
     );
}

export default TestRouter;