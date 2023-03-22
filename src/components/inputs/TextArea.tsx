import React from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder, required, rows }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : `Entrez votre ${label}`}
        className="p-2 border border-gray-400 rounded"
        required={required}
        rows={rows ? rows : 4}
      />
    </div>
  );
};

export default TextArea;
