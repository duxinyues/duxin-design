import { useState, Fragment } from 'react';
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
      key: "aa",
      placeholder: "今天"
    },
    {
      position: "tab",
      key: "aad",
      placeholder: "明天"
    },
    {
      position: "show",
      placeholder: "姓名",
      type: "input",
      key: "username",
      initialValue:"90",
      rules: [{ required: true,message: '姓名为必填项' }],
    },
    {
      position: "hidden",
      placeholder: "年龄",
      type: "input",
      key: "age",
      initialValue:"90",
      // rules: [{ required: true, message: '年龄为必填项'}],
    }
  ]
  const handleFinish = () => {
    console.log("表单", form)
    form.validateFields().then(values => {
      console.log("表单字段", values)
    }).catch(err => {
      console.log("err：", err)
    })
  }
  return <DXFormFilter
    formItemList={formItemList}
    form={form} handleFinish={() => handleFinish()} />
}

export default App
