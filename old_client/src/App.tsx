
import './App.css';
import { useEffect } from 'react';
import { useNetworkLayer } from './hooks/useNetworkLayer'; 
import { store } from "./store/store";
import { UI } from './ui';


function App() {
  const networkLayer = useNetworkLayer();
   
  useEffect(() => {
    if (!networkLayer) return;

    console.log("Setting network layer");

    store.setState({ networkLayer });

  }, [networkLayer]);


  return (
    <div>   
      <UI  />
    </div>
  );
}

export default App;
