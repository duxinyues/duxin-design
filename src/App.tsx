import { useState } from 'react';
import { Form } from "antd"
import './App.css'
import Button from './components/Button';
import DXFormFilter from "./components/FormFilter"


function App() {
  const [count, setCount] = useState(0);
  const [form] = Form.useForm();
  const formItemList = [
    {
      position: "tab",
      key:"aa",
      placeholder:"今天"
    },
    {
      position: "tab",
      key:"aad",
      placeholder:"明天"
    },
    {
      position: "show"
    },
    {
      position: "hidden"
    }
  ]
  return (
    <>
    <DXFormFilter 
      toggle= { true}
      formItemList={formItemList}
    />
    <Button />
    < />
  )
}

export default App
