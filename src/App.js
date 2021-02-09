import { useEffect, useState } from 'react';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import './App.css';

function App() {
  const [ apiReady, setApiReady ] = useState(false);
  useEffect( async () => {
    try {
      const response = await fetch('/api/test');
      const data     = await response.json();
      setApiReady(true);
    } catch (error) {
      alert(error);
    }
  },[]);

  
  return apiReady ? <b>"Connected"</b> : <><FaBeer/>Connecting</>;
}

export default App;
