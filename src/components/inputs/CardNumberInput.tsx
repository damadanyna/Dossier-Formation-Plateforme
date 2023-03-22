import React, { useState } from 'react';

interface CardNumberInputProps {
  label: string;
  name: string;
  required?: boolean;
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({ label, name, required }) => {
  const [cardNumber, setCardNumber] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^\d]/g, ''); // enlever tous les caractères sauf les chiffres
    setCardNumber(value);
  };

  return (
    <div className="relative mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type="tel"
        placeholder="XXXX XXXX XXXX XXXX"
        pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
        value={cardNumber}
        onChange={handleChange}
        maxLength={19} // limite le nombre de caractères à 19
        required={required}
      />
    </div>
  );
};

export default CardNumberInput;
