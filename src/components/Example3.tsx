import React from 'react';
import { Menu, Dropdown, Button, DatePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { RangePicker } = DatePicker;

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
    <Menu.Item key="4">Option 4</Menu.Item>
    <SubMenu key="sub1" title="Option 5">
      <Menu.Item key="5-1">
        <RangePicker />
      </Menu.Item>
    </SubMenu>
  </Menu>
);

const Example3: React.FC = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button>
        Dropdown <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Example3;
