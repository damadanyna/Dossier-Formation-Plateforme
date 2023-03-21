import React from 'react';

type CheckboxProps = {
  label: string;
  name: string;
  required?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, name, required }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        id={name}
        required={required}
        className="mr-2"
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
