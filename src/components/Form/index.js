import PropTypes from 'prop-types';
import ButtonNumber from './ButtonNumber';

function Form({ prediction, setFavoriteNumber }) {
  return (
    <section>
      <form>
        <label htmlFor="numberInput">Dis-moi ton chiffre préféré, je te dirai qui tu es</label>
        <input id="numberInput" type="text" />
      </form>
      <div>
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={0} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={1} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={2} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={3} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={4} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={5} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={6} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={7} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={8} />
        <ButtonNumber setFavoriteNumber={setFavoriteNumber} number={9} />
      </div>
      <p>{prediction}</p>
    </section>
  );
}

Form.propTypes = {
  prediction: PropTypes.string.isRequired,
  setFavoriteNumber: PropTypes.func.isRequired,
};

export default Form;
