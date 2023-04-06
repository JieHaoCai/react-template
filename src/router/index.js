import React from 'react';
import {useRoutes} from "react-router-dom";
import LazyLoad from './LazyLoad';

function IndexRouter(props) {
  const router = useRoutes([
    //  重定向操作
    {
      path:"/",
      element:  LazyLoad("/Hello")
    },
    {
      path:"/home",
      element:  LazyLoad("/Hello")
    },
    {
      path:"/test",
      element:  LazyLoad("/Test")
    },
    {
      path:"/testroute",
      element:  LazyLoad("/TestRouter")
    },
  ]);


  return (
      router
  );

}


export default IndexRouter;

