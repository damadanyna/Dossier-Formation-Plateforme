import React from 'react';

interface PasswordProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const Password: React.FC<PasswordProps> = ({ label, value, onChange, placeholder = '', required = false }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1" htmlFor={label}>
        {label}
        {/* {required && <span className="text-red-500">*</span>} */}
      </label>
      <input
        type="password"
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

interface ConfirmPasswordProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const ConfirmPassword: React.FC<ConfirmPasswordProps> = ({ label, value, onChange, placeholder = '', required = false }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1" htmlFor={label}>
        {label}
        {/* {required && <span className="text-red-500">*</span>} */}
      </label>
      <input
        type="password"
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

export { Password, ConfirmPassword };
