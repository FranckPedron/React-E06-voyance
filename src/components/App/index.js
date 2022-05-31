// == Import
import { useState } from 'react';
import Header from '../Header';
import Form from '../Form';
import Infos from '../Infos';

import data from './data';

// == Composant
function App() {
  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const foundPrediction = data.find((currentValue) => currentValue.number === favoriteNumber);

  return (
    <div className="app">
      <Header />
      <Form prediction={foundPrediction.sentence} setFavoriteNumber={setFavoriteNumber} />
      <Infos number={favoriteNumber} />
    </div>
  );
}

// == Export
export default App;
