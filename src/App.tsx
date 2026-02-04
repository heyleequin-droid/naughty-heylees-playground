import React from 'react';
import BarMenu from './components/BarMenu';
import { barMenu } from './barMenu';

export default function App() {
  return (
    <div>
      <BarMenu menu={barMenu} />
    </div>
  );
}
