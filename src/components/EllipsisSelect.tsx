import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const StyledSelect = styled(Select)`
  width: 200px;

  .ant-select-selector {
    display: flex;
    align-items: center;
  }

  .ant-select-selection-item {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const EllipsisSelect = () => (
  <StyledSelect
    placeholder="Select an option"
    defaultValue="Long option text that should show ellipsis when selected"
  >
    <Option value="short">Short option</Option>
    <Option value="medium">Medium option text</Option>
    <Option value="long">Long option text that should show ellipsis when selected</Option>
  </StyledSelect>
);

export default EllipsisSelect;
