import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';

function App() {
  const [isCardClicked, setIsCardClicked] = useState(false); // For card clicked state

  return (
    <>
      <Card isCardClicked={isCardClicked} setIsCardClicked={setIsCardClicked} />
    </>
  );
}

export default App;
