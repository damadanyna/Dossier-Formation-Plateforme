import React from 'react';

interface TextProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const Text: React.FC<TextProps> = ({ label, value, onChange, placeholder, required }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1">{label}</label>
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder ? placeholder : `Entrez votre ${label}`} 
        className="p-2 border border-gray-400 rounded"
        required={required}
      />
    </div>
  );
};

export default Text;
