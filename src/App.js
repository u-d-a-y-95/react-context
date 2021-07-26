import React from 'react';
import './style.css';
import Table from './component/table';
import Input from './component/input';
import Provider from './state/context';

export default function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}
