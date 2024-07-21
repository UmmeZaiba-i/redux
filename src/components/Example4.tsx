import { DatePicker, Select } from 'antd'
import { useRef, useState } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Example2() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isdatePickerOpen, setIsDatePickerOpen] = useState<boolean>()
  const selectRef = useRef<any>();
  
  const handleSelectChange = (value: any) => {
    setSelectedOption(value)
    if (value === 'option 3') {
      setIsDatePickerOpen(true)
      // Keep the dropdown open
      setTimeout(() => {
        if (selectRef.current) {
          selectRef.current.blur();
          // selectRef.current.focus();
        }
      }, 0);
    }
    else {
      setIsDatePickerOpen(false)
    }
  }

  const handleDateChange = () => {
    console.log(Date, toString)
    setIsDatePickerOpen(true)
  }

  return (
    <div>

      <Select
      ref = {selectRef}
        placeholder='Hey'
        style={{ width: '10rem' }}
        onChange={handleSelectChange}
        open={selectedOption === 'option3' || isdatePickerOpen}
      >
        <Option value='option 1'>Hey 1</Option>
        <Option value='option 2'>Hey 2</Option>
        <Option value='option 3'>Hey 3</Option>
      </Select>
      {selectedOption === 'option 3' &&  (
        <RangePicker onChange={handleDateChange} autoFocus />
      )}

    </div>
  )
}


