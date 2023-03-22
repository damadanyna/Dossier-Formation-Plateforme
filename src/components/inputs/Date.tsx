import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  required?: boolean;
}

const Date: React.FC<Props> = ({ label, value, onChange, required }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1">
        {label}
        {/* {required && <span className="text-red-500">*</span>} */}
      </label>
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Date;
