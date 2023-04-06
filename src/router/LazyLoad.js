// 路由懒加载的封装
import React from "react";


const LazyLoad = (path) => {
  const Compoent = React.lazy(() => import('../views'+path));
  return(
      <React.Suspense fallback={<>加载中</>}>
        <Compoent></Compoent>
      </React.Suspense>
  )
}

export default LazyLoad
