import React from 'react';
import visa  from '../../assets/visa.svg';
import master from '../../assets/master.svg';
import bitcoin from '../../assets/bitcoin.svg';
// import { ReactComponent as AmericanExpressIcon } from '../assets/american-express.svg';

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const PaymentCardNameInput: React.FC<InputProps> = ({ label, name, placeholder, required }) => {
  return (
    <div className="relative mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center">
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          required={required}
        />
        <div className="absolute right-0 bottom-0 mb-2 mr-2 flex justify-center">
            <img src={visa} alt="logo" className="h-6 w-6 ml-2"/>
            <img src={master} alt="logo" className="h-6 w-6 ml-2"/>
            <img src={bitcoin} alt="logo" className="h-6 w-6 ml-2"/>
            <img src={visa} alt="logo" className="h-6 w-6 ml-2"/>
        </div>
      </div>
    </div>
  );
};

export default PaymentCardNameInput;
