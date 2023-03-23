import React from 'react';
import Select from './components/inputs/Select';

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const App: React.FC = () => {
  const selectProps: SelectProps = {
    label: 'Select an option',
    name: 'options',
    options,
    required: true,
  };

  return (
    <div className="App">
      <Select {...selectProps} />
    </div>
  );
};

export default App;