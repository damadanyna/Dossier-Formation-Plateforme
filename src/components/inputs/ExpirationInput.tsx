import React, { useState } from 'react';

interface ExpirationInputProps {
  label: string;
  name: string;
  style_:Object;
  required?: boolean;
}

const ExpirationInput: React.FC<ExpirationInputProps> = ({ label, name, required,style_ }) => {
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [showPartial, setShowPartial] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^\d/]/g, ''); // enlever tous les caractères sauf les chiffres et "/"
    setExpirationDate(value);
  };

  const handleFocus = () => {
    setShowPartial(true);
  };

  const handleBlur = () => {
    setShowPartial(false);
  };

  return (
    <div className="relative mb-4" style={style_}>
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center">
        <input
          className="appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`${name}-date`}
          name={`${name}-date`} 
          style={{width:`100%`}}
          type="text"
          placeholder="MM/YY"
          pattern="\d\d/\d\d"
          value={expirationDate}
          onChange={handleChange}
          maxLength={5} // limite le nombre de caractères à 5 (2 pour le mois et 2 pour l'année, plus le "/" au milieu)
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
        />
        {showPartial && (
          <input
            className="appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
            id={`${name}-partial`}
            name={`${name}-partial`} 
            style={{width:`100%`}}
            type="text"
            placeholder="XXX"
            maxLength={3} // limite le nombre de caractères à 3
            required={required}
          />
        )}
        <input
          className="appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
          id={`${name}-zip`}
          name={`${name}-zip`} 
          style={{width:`100%`}}
          type="text"
          placeholder="Code postal"
          required={required}
        />
      </div>
    </div>
  );
};

export default ExpirationInput;
