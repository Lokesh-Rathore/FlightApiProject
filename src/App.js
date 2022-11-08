import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
// import aviationstack from './components/avtstc';

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(
        // "https://api.flightapi.io/onewaytrip/636a1dc4069374f3da941335/LHR/LAX/2022-12-11/2/0/1/Economy/USD"
        "https://api.aviationstack.com/v1/flights ? access_key = 9702e1ceb85e3979dec33f6e6f98e503"
      )
      .then((res) => {
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1>my name is lokesh rathore</h1>
    </div>
  );
}

export default App;
