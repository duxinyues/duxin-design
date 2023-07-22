import React, { useState } from "react";
import { Select } from "antd";

interface optionItem {
    itemKey?: string,
    itemValue?: string
}
interface ConfigProps {
    options: optionItem[],// 下拉框选项
    styles?: object, // 宽度
    otherProps?: object, // 其他属性
    type?:string, // 类型：text
}
interface Props {
    config: ConfigProps
}
const DXSelect: React.FC<Props> = ({ config }) => {
    const { styles = { width: "200px" }, options, otherProps,type } = config;

    if(type){
        
    }

    return <Select style={styles} {...otherProps}>
        {
            options.map((item: any) => <Select.Option key={item.itemKey} value={item.itemKey}>{item.itemValue}</Select.Option>)
        }
    </Select>
}
export default DXSelect;