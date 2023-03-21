import React from 'react';

type RadioProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  required?: boolean;
};

const Radio: React.FC<RadioProps> = ({ label, name, options, required = false }) => {
  return (
    <div className="space-y-2">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="space-x-2">
        {options.map((option) => (
          <div key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label htmlFor={option.value} className="ml-2 block text-sm leading-5 text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
