import { ChangeEvent, FC, useState } from 'react';
import { InputText } from 'primereact/inputtext';

import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

export const Test = () => {
  const [value, setValue] = useState('');
  return (
    <main>
      <h1>Playground</h1>
      <InputText
        value={value}
       
      />
      <p>{value}</p>
    </main>
  );
};