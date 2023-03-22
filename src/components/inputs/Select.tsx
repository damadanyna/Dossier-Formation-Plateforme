import React from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  name: string;
  options: Option[];
  required?: boolean;
};

const Select: React.FC<SelectProps> = ({ label, name, options, required = false }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
