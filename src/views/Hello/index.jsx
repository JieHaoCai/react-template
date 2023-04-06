import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux'
import {changeName} from '../../store/action'

let Hello = (props)=>{

  

    const [name,setName] = useState('')
    //接收方
    const test = useSelector((state) =>state.test)
    //发送方
    const dispatch = useDispatch()


    useEffect(()=>{
    },[])


    const toSetRedux=()=>{
        dispatch(changeName(name))
    }

    const change=(e)=>{
        setName(e.target.value)
    }



    return (
        <div>
            输入的内容是： {name}<br/>
            <input onInput={change} placeholder="请输入你的内容"></input><br/>
            <button onClick={toSetRedux}>点击存储到redux</button>
                
                <div>redux初始值：{test.name}</div>
        </div>
    )
}

export default Hello;