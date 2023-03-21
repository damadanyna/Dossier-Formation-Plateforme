import React, { useState } from 'react';
import  Input from './components/inputs/Text';
import  Email from './components/inputs/Email';
import { Password, ConfirmPassword } from './components/inputs/Password';
import Date from './components/inputs/Date';
import Radio from './components/inputs/Radio';
import Select from './components/inputs/Select';
import Checkbox from './components/inputs/Checkbox';
import textes from './data/textes.json';
import option from './data/options.json';

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };
  
  const handleBirthDateChange = (date: Date | null) => {
    setBirthDate(date);
  };

  return (
    <div className="p-4">
      <form>
        <Input label={textes.nom} value={name} onChange={handleNameChange} placeholder={textes.placeholder} required={true} />
        <Email label={textes.email} value={email} onChange={handleEmailChange} placeholder={textes.placeholderE} required={true} />
        <p>Vous avez saisi: {name} et {email}</p>
        <Password
          label={textes.passwordLabel}
          value={password}
          onChange={handlePasswordChange}
          placeholder={textes.passwordPlaceholder}
          required
        />

        <ConfirmPassword
          label={textes.confirmPasswordLabel}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder={textes.confirmPasswordPlaceholder}
          required
        />
        <Date
          label={textes.birthDateLabel}
          value={birthDate}
          onChange={handleBirthDateChange}
          required
        />

        <Radio label="Choisissez une option" name="option" options={options} required={true} />

        <h1 className="text-3xl font-bold mb-8">Exemple de composant Select</h1>
        <Select label="Pays" name="country" options={option} required />

        <Checkbox label="Accepter les conditions d'utilisation" name="conditions" required={true} />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {textes.submitButton}
        </button>
      </form>
    </div>
  );
};

export default App;
