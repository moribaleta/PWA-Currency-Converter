import './App.css';

import { ChangeEventHandler, useEffect, useState } from 'react';

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
  const [toAmount, onSetToAmount] = useState<number>();

  const onValueFromChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onSetFromAmount(Number(event.target.value));
  };

  useEffect(() => {
    console.log({
      fromAmount,
      fromConversion,
      toConversion,
    });
    onSetToAmount(convertCurrency(fromAmount, fromConversion, toConversion));
    onSetToAmount(convertCurrency(fromAmount, fromConversion, toConversion));
  }, [fromAmount, fromConversion, toAmount, toConversion]);

  return (
    <div className="App">
      <div className="Container">
        <div>
          <p>
            <input
              id="fromInput"
              type="number"
              value={fromAmount}
              onChange={(event) =>
                setFromConversion(event.target.valueAsNumber)
              }
            />
            <Dropdown list={currencies} onSetCurrency={setFromConversion} />
          </p>
          <p>
            <input
              id="toInput"
              type="number"
              onChange={(event) => setToConversion(event.target.valueAsNumber)}
              value={toAmount}
            />
            <Dropdown list={currencies} onSetCurrency={setToConversion} />
          </p>
        </div>
        {}
      </div>
    </div>
  );
}

export default App;
