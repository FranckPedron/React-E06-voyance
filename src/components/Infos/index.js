import PropTypes from 'prop-types';

function Infos({ number }) {
  const word = (number % 2) === 0 ? 'pair' : 'impair';
  return (
    <section>
      <h2>Le savais-tu ?</h2>
      <p>Le double de {number} est {number * 2}</p>
      <p>{number} est {word}</p>
    </section>
  );
}

Infos.propTypes = {
  number: PropTypes.number.isRequired,
};
export default Infos;
