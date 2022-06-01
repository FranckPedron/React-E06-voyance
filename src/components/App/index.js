// == Import
import { useState } from 'react';
import Header from '../Header';
import Form from '../Form';
import Infos from '../Infos';

import data from './data';

// == Composant
function App() {
  const [favoriteNumber, setFavoriteNumber] = useState('');
  const foundPrediction = data.find((currentValue) => (
    currentValue.number === parseInt(favoriteNumber, 10)
    || currentValue.text === favoriteNumber
  ));
  const message = foundPrediction ? foundPrediction.sentence : 'Je ne vois rien';

  return (
    <div className="app">
      <Header />
      <Form
        prediction={message}
        setFavoriteNumber={setFavoriteNumber}
        numberList={data}
        favoriteNumber={favoriteNumber}
      />
      {message !== 'Je ne vois rien' && (
        <Infos number={foundPrediction.number} />
      )}
    </div>
  );
}

// == Export
export default App;
