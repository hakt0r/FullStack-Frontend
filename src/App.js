import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ apiReady, setApiReady ] = useState(false);
  useEffect( async () => {
    const response = await fetch('/api/test');
    const data     = await response.json();
    setApiReady(true);
  },[]);

  return apiReady ? "Connected" : "Connecting...";
}

export default App;
