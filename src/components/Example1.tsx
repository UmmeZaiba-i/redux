import React from 'react';
import { Menu, DatePicker } from 'antd';

const { SubMenu } = Menu;
const { RangePicker } = DatePicker;

const Example1: React.FC = () => {
  return (
    <Menu mode="vertical" style={{ width: 256 }}>
      <SubMenu key="sub1" title="Date Range Picker">
        <Menu.Item key="1">
          <RangePicker />
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Example1;