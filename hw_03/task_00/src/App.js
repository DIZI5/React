import { useEffect, useState } from 'react';
import './App.css';
import Random from './components/Random';
import TrafficLight from './components/TrafficLight';

function App() {
  const [TLState, setTLState] = useState("go");

  function wait(seconds)
  {
    return new Promise(resolve => setTimeout(resolve, (seconds * 1000)));
  }

  useEffect(() => {
    async function TLWork() {
    await wait(30);
    
    setTLState("stop");

    await wait(60);
    
    setTLState("getReady");

    await wait(4);

    setTLState("go");
    }

    TLWork();
  }, [])

  return (
    <div className="App">
      <div>
        <Random start="1" end="10"/>
      </div>

      <br/>

      <div>
        <TrafficLight state={TLState}/>
      </div>     
    </div>
  );
}

export default App;