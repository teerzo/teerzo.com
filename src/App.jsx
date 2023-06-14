
// Local
import Router from '@components/router';
import Background from '@components/background';

// Styles
import './App.scss';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    console.log('version', '0.5.0')
  }, [])

  return (
    <div className="App">
      <Background />
      <Router />
    </div>
  );
}