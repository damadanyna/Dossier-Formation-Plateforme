import React, { useState } from 'react';
import Textarea from './components/inputs/TextArea';

function App() {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="App">
      <Textarea
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Entrez une description de votre application"
        required={true}
        rows={8}
      />
    </div>
  );
}

export default App;
