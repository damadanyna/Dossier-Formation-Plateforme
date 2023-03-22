import React from 'react';

interface EmailProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const Email: React.FC<EmailProps> = ({ label, value, onChange, placeholder = '', required = false }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1" htmlFor={label}>
        {label}
        {/* {required && <span className="text-red-500">*</span>} */}
      </label>
      <input
        type="email"
        className="p-2 border border-gray-400 rounded"
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Email;
