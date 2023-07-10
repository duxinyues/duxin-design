import { Button, Col, DatePicker, Form, Input, Row, Tabs, Checkbox } from 'antd';
import {
    DoubleRightOutlined
  } from '@ant-design/icons';
import "./index.scss";
import moment from 'moment';


interface Props{
    formItemList:any[];
    extFormItemList:any[];
    toggle:Boolean;
    hideButton?:Boolean;
    extAction?:{};
}

const { TabPane } = Tabs;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
// 横向表单筛选
export default function FormFilter({extFormItemList=[],toggle=false,hideButton,extAction,formItemList=[]}:Props) { 
    const tabsList = formItemList.filter(item => item.position === 'tab');
    const showList = formItemList.filter(item => item.position === 'show');
    const hiddenList = formItemList.filter(item => item.position === 'hidden');
    const callback = ()=>{}
    const levelSearch = ()=>{}
    const handleQueryFormKeyDown = ()=>{}
    const switchItemType = (item:any)=>{
        item.props = item.props || {};
        switch (item.type) {
            // case 'dictSelect':
            //   return (
            //     <YRDict.Select
            //       allowClear
            //       placeholder={placeholderWithoutPrefix ? item.placeholder : `请选择${item.placeholder}`}
            //       style={{ width: '100%' }}
            //       dictkey={item.dictkey}
            //       mode={item.mode}
            //       filterkeys={item.filterkeys}
            //       onChange={item.onChange}
            //       width={item.width}
            //       showSearch
            //       optionFilterProp="children"
            //       filterOption={(input, option) =>
            //         option.props.children[1] && option.props.children[1].includes(input && input.trim())
            //       }
            //       onKeyDown={this.handleQueryFormKeyDown}
            //       {...item.props}
            //     />
            //   );
            case 'input':
              return (
                <Input
                  onBlur={item.onBlur}
                  onChange={item.onChange}
                  placeholder={item?.placeholder && `请输入${item.placeholder}`}
                  width={item?.width}
                  allowClear
                  onKeyDown={handleQueryFormKeyDown}
                  {...item.props}
                />
              );
            case 'pcaSelect':
              return (
                <YRPcaSelect
                  onChange={item.onChange}
                  level="3"
                  placeholder={placeholderWithoutPrefix ? item.placeholder : `请输入${item.placeholder}`}
                  width={item.width}
                  onKeyDown={this.handleQueryFormKeyDown}
                  {...item.props}
                />
              );
            case 'datePicker':
              return (
                <DatePicker
                  onChange={item.onChange}
                  allowClear
                  placeholder={ item?.placeholder && `请选择${item.placeholder}`}
                  width={item.width}
                  onKeyDown={handleQueryFormKeyDown}
                  {...item.props}
                />
              );
            case 'rangePicker':
              return (
                <DatePicker.RangePicker
                  allowClear
                  placeholder={
                    item.rangePickerPlaceholder ? item.rangePickerPlaceholder : ['开始日期', '结束日期']
                  }
                  ranges={{
                    今日: [moment().startOf('day'), moment().endOf('day')],
                    本周: [moment().startOf('week'), moment().endOf('week')],
                    本月: [moment().startOf('month'), moment().endOf('month')],
                    清空: [],
                  }}
                  width={item.width}
                  showTime={!!item.showTime}
                  onKeyDown={this.handleQueryFormKeyDown}
                  {...item.props}
                />
              );
      
            case 'component':
              return item.component;
            default:
              return (
                <Input
                  onChange={item.onChange}
                  placeholder={placeholderWithoutPrefix ? item.placeholder : `请输入${item.placeholder}`}
                  onKeyDown={this.handleQueryFormKeyDown}
                  {...item.props}
                />
              );
          }
    }
    return <div className="toolbarSearch">
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <Row
              type="flex"
              align="middle"
              justify="start"
              gutter={12}
              className="formItemBottom"
            >
              {tabsList && tabsList.length > 0 ? (
                <Col style={{ fontSize: 14 }}>
                  <Tabs
                    defaultActiveKey={tabsList[0].key}
                    className="tabsCover"
                    onChange={callback}
                  >
                    {tabsList.map(item => (
                      <TabPane tab={item.placeholder} key={item.key} />
                    ))}
                  </Tabs>
                </Col>
              ) : (
                ''
              )}
              {showList && showList.length > 0
                ? showList.map(item => {
                  return (
                    <Col key={item.key} style={{ width: item.width || 170 }}>
                      <FormItem name={item.key}>
                        {switchItemType(item)}
                      </FormItem>
                    </Col>
                  );
                })
                : null}
              {extFormItemList}
              {hiddenList && hiddenList.length > 0 ? (
                <Col>
                  <div
                    onClick={levelSearch}
                    className={`search ${toggle ? 'btn-edit' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <DoubleRightOutlined style={{ fontSize: 12, marginRight: 4 }} />
                    <span>更多</span>
                    {/* <span>{toggle ? '收起' : '展开'}</span>
                    <Icon
                      type="double-right"
                      className={toggle ? 'rotate' : ''}
                      style={{ fontSize: 12, transition: '0.2s', marginLeft: 5 }}
                    /> */}
                  </div>
                </Col>
              ) : (
                ''
              )}
              {hideButton ? (
                ''
              ) : (
                <Col>
                  <Button type="primary" style={{ marginRight: 12 }} >
                    查询
                  </Button>
                  <Button>重置</Button>
                </Col>
              )}
            </Row>
          </Col>
          <Col className="extAction">{extAction || ''}</Col>
        </Row>
        <Form>
          <div
            style={{ background: '#f6f6f6' }}
            className={toggle ? "levelSearch" : "hide"}
          >
            <Row>
              {hiddenList && hiddenList.length > 0
                ? hiddenList.map(item => {
                  return (<Col key={item.key} span={item.span || 8}>test</Col>
                  );
                })
                : ''}
            </Row>
          </div>
        </Form>
    </div>
}
