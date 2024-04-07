import './App.css';

import { useCallback, useEffect, useState } from 'react';

import { Currency, Query } from 'shared';
import Dropdown from './components/Dropdown';
import { convertCurrency } from './util';
import { getCurrencies, getQueries, sendQuery } from './services/api';

function App() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [queries, setQueries] = useState<Query[]>([]);

  const loadInfo = useCallback(() => {
    getCurrencies()
      .then((results) => {
        console.log(results);
        setCurrencies(results);

        setFromConversion(results[0].name);
        setToConversion(results[0].name);
      })
      .catch((err) => console.error('@App', err));

    getQueries()
      .then((results) => {
        console.log(results);
        setQueries(results);
      })
      .catch((err) => console.error('@App', err));
  }, []);

  useEffect(() => {
    loadInfo();
  }, [loadInfo]);

  useEffect(() => {
    window.addEventListener('offline', (e) => {
      console.log('offline');
    });

    window.addEventListener('online', (e) => {
      console.log('online');
    });
  }, []);

  const [fromConversion, setFromConversion] = useState<string>();
  const [toConversion, setToConversion] = useState<string>();
  const [fromAmount, onSetFromAmount] = useState<number>(0);
  const [toAmount, onSetToAmount] = useState<number>(0);

  const getRate = (name: string) => {
    return currencies.find((currency) => {
      return currency.name === name;
    })?.conversionRate;
  };

  const onConversion = () => {
    console.log('@onCoversion', {
      fromConversion,
      toConversion,
    });
    if (!fromConversion || !toConversion) return;

    const fromRate = getRate(fromConversion);
    const toRate = getRate(toConversion);

    if (!fromRate || !toRate) return;

    const converted = convertCurrency(fromAmount, fromRate, toRate);
    onSetToAmount(converted);

    const newQuery = {
      currency1: fromConversion,
      currency2: toConversion,
      dateCreated: new Date(),
      value: converted,
    };

    sendQuery(newQuery)
      .catch((err) => console.error('@onConversion', err))
      .finally(() => {
        setQueries((prevQueries) => {
          return [...prevQueries, newQuery];
        });
      });
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
            <p>{toAmount}</p>
            <Dropdown list={currencies} onSetCurrency={setToConversion} />
          </p>
          <button title="Convert" onClick={onConversion}>
            Convert From
          </button>
        </div>
        <div>
          {queries.map((query, index) => {
            return (
              <div key={query.currency1 + query.currency2 + index}>
                <p>
                  {query.currency1} --&gt {query.currency2} = {query.value}
                </p>
                <p>{new Date(query.dateCreated).toLocaleDateString()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
