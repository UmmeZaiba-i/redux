import { DatePicker, Select } from 'antd';
import { useState, useEffect, useRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import './Example2.css';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Example2() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [selectedDates, setSelectedDates] = useState<[Dayjs, Dayjs] | null>(null);
  const selectRef = useRef<any>(null);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    if (value === 'option 3') {
      setIsDatePickerOpen(true);
    } else {
      setIsDatePickerOpen(false);
      setSelectedDates(null);
    }
  };

  const handleDateChange = (dates: [Dayjs, Dayjs] | null, dateStrings: [string, string]) => {
    if (Array.isArray(dates) && dates.length === 2) {
      setSelectedDates(dates);
      if (dates[0] && dates[1]) {
        setIsDatePickerOpen(false);
        setSelectedOption(null); 
      }
    } else {
      setSelectedDates(null);
    }
  };

  useEffect(() => {
    if (selectedOption === 'option 3' && selectRef.current) {
      setTimeout(() => {
        selectRef.current.blur();
      }, 0);
    }
  }, [selectedOption]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <Select
        ref={selectRef}
        placeholder="Select an option"
        style={{ width: '10rem' }}
        onChange={handleSelectChange}
        value={selectedOption}
        open={selectedOption === 'option 3' || undefined}
        onDropdownVisibleChange={(open) => {
          if (selectedOption === 'option 3') {
            setIsDatePickerOpen(true);
          }
        }}
        className='selectday'
        dropdownStyle={{
          height: selectedOption === 'option 3' ? '19.35rem' : undefined,
          borderRadius: '0px',
          backgroundColor:'#F5F7FA'
        }}
      >
        <Option value="option 1">Hey 1</Option>
        <Option value="option 2">Hey 2</Option>
        <Option value="option 3">Hey 3</Option>
      </Select>
      {selectedDates && (
        <div style={{ marginLeft: '2rem' }}>
        {/* <div> */}
          <RangePicker 
            value={selectedDates}
            format='DD-MMM-YYYY'
            // disabled
            style={{ width: 'auto' }}
            dropdownClassName="custom-dropdown"
            
          />
        </div>
      )}
      {selectedOption === 'option 3' && isDatePickerOpen && (
        <div style={{ position: 'absolute', left: '12rem', top: 0, zIndex: 10,  }}>
        {/* <div> */}
          <RangePicker 
            onChange={handleDateChange} 
            autoFocus 
            open 
            dropdownClassName="custom-dropdown"
            format='DD-MMM-YYYY'
            style={{ borderRadius: '0px', boxShadow: 'none' }}
          />
        </div>
      )}
    </div>
  );
}
