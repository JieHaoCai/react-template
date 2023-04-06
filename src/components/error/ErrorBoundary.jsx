
import Item from "antd/lib/list/Item";
import React from "react";
import { Button, Result } from 'antd';
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        goback:false
     };
    }
    
    back=()=>{
        this.setState({ goback: true});
        console.log(this.state.goback)
        console.log("返回上一步")
    }

    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ goback: false});
      this.setState({ hasError: true});
      // You can also log the error to an error reporting service
      console.log("错误信息为：",error)
    }
  
    render() {
      if (this.state.hasError&&!this.state.goback) {
        // You can render any custom fallback UI
        return (    
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="抱歉,页面出现错误，您可以返回上一步进行重试或反馈给工作人员"
                    extra={<Button type="primary" onClick={this.back}>返回上一步</Button>}
                />
            </div>    
        )
      }
      if(this.state.goback){
        return this.props.children;
      }
      return this.props.children;
    }
  }

export default ErrorBoundary