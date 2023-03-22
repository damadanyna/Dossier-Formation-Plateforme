import React, { useState } from 'react';
import PaymentCardNumberInput from './components/inputs/CardNumberInput';
import  CardNameInput from './components/inputs/PaymentCardNameInput';
import PaymentCardZipCodeInput from './components/inputs/ExpirationInput';
import PaymentCardExpirationDateInput from './components/inputs/ExpirationInput';

function App() {
const [cardName, setCardName] = useState('');
const [cardNumber, setcardNumber] = useState('');
const [cardExpirationDate, setCardExpirationDate] = useState('');

const handleCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setCardName(event.target.value);
};

const handlecardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setcardNumber(event.target.value);
};

const handleCardExpirationDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setCardExpirationDate(event.target.value);
};

return (
  <div className='APP'>
<div className="container mx-auto py-10">
    <CardNameInput 
        label="Nom sur la carte" 
        value={cardName} 
        onChange={handleCardNameChange} 
        placeholder="Entrez votre nom" 
        required={true} 
      />
      <PaymentCardNumberInput 
        label="Numéro de carte" 
        name="cardNumber" 
        value={cardNumber} 
        onChange={handlecardNumberChange}
        placeholder="1234 5678 9012 3456" 
        required
      />
          <PaymentCardExpirationDateInput
            label="Date d'expiration"
            name="cardExpirationDate"
            value={cardExpirationDate}
            onChange={handleCardExpirationDateChange}
            placeholder="MM/AA"
            required={true}
          />
</div>
</div>
);
}

export default App;