import React ,{useState,useEffect} from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './index.scss'
import {useNavigate } from 'react-router-dom'
function Header() {

const   navigate  = useNavigate()


const items = [
  {
    label: '主页',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: '应用',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: '测试页面',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'useRoute封装',
        children: [
          {
            label: 'useHistory模式',
            key: 'setting:1',
          },
          {
            label: '选项  2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label:'普通路由测试',
        children: [
          {
            label: '选项 3',
            key: 'setting:3',
          },
          {
            label: '选项 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        这里可以测试跳转
      </a>
    ),
    key: 'alipay',
  },
];

    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if(e.key=="setting:1"){
            navigate("/test")
        }else if(e.key=="home"){
            navigate('/')
        }else if(e.key=='setting:3'){
            navigate('/testroute')
        }
    };


    return ( 
        <div className="main">
           <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
     );
}

export default Header;