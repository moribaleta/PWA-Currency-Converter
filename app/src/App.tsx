import './App.css';

import { useEffect, useState } from 'react';

import { Currency } from 'shared';
import Dropdown from './components/Dropdown';
import { convertCurrency } from './util';
import { getCurrencies } from './services/api';

function App() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    console.log('im here');
    getCurrencies()
      .then((results) => {
        console.log(results);
        setCurrencies(results);
      })
      .catch((err) => console.error('@App', err));
  }, []);

  const [fromConversion, setFromConversion] = useState<number>(1);
  const [toConversion, setToConversion] = useState<number>(1);
  const [fromAmount, onSetFromAmount] = useState<number>(0);
  const [toAmount, onSetToAmount] = useState<number>(0);

  const onPress = () => {
    onSetToAmount(convertCurrency(fromAmount, fromConversion, toConversion));
    //onSetFromAmount(convertCurrency(toAmount, toConversion, fromConversion));
  };

  return (
    <div className="App">
      <div className="Container">
        <div>
          <p>
            <input
              id="fromInput"
              type="number"
              value={fromAmount}
              onChange={(event) => onSetFromAmount(event.target.valueAsNumber)}
            />
            <Dropdown list={currencies} onSetCurrency={setFromConversion} />
          </p>
          <p>
            {/* <input
              id="toInput"
              type="number"
              onChange={(event) => onSetToAmount(event.target.valueAsNumber)}
              value={toAmount}
            /> */}
            <p>{toAmount}</p>
            <Dropdown list={currencies} onSetCurrency={setToConversion} />
          </p>
          <button title="Convert" onClick={onPress}>
            Convert From
          </button>
        </div>
        {}
      </div>
    </div>
  );
}

export default App;
