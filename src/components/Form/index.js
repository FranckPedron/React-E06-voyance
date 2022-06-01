import PropTypes from 'prop-types';
import ButtonNumber from './ButtonNumber';
import './style.scss';

function Form({
  prediction, setFavoriteNumber, numberList, favoriteNumber,
}) {
  return (
    <section>
      <form className="form">
        <label className="form-label" htmlFor="numberInput">Dis-moi ton chiffre préféré, je te dirai qui tu es</label>
        <input
          className="form-input"
          id="numberInput"
          type="text"
          placeholder="Saisir un nombre"
          onChange={(e) => setFavoriteNumber(e.target.value)}
          value={favoriteNumber}
        />
      </form>
      <div>
        <button className="button" type="button" onClick={() => setFavoriteNumber('')}>Effacer</button>
        {
          numberList.map((currentValue) => (
            <ButtonNumber
              key={currentValue.number}
              setFavoriteNumber={setFavoriteNumber}
              number={currentValue.number}
            />
          ))
        }
      </div>
      <p className="prediction">{prediction}</p>
    </section>
  );
}

Form.propTypes = {
  prediction: PropTypes.string.isRequired,
  setFavoriteNumber: PropTypes.func.isRequired,
  numberList: PropTypes.arrayOf(PropTypes.shape(
    { number: PropTypes.number.isRequired },
  )).isRequired,
  favoriteNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Form;
