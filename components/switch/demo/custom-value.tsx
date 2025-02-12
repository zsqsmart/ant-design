import React, { useState } from 'react';
import { Switch } from 'antd';

const App: React.FC = () => {
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState('hello');

  const onChange1 = (value: boolean) => {
    setValue1(value);
  };

  const onChange2 = (value: number) => {
    setValue2(value);
  };

  const onChange3 = (value: string) => {
    setValue3(value);
  };

  return (
    <div>
      <Switch value={value1} onChange={onChange1} />
      {value1} <br />
      <Switch value={value2} checkedValue={1} unCheckedValue={0} onChange={onChange2} /> {value2}
      <br />
      <Switch value={value3} checkedValue="hello" unCheckedValue="word" onChange={onChange3} />{' '}
      {value3}
    </div>
  );
};

export default App;
