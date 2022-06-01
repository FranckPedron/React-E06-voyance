import PropTypes from 'prop-types';

function ButtonNumber({ number, setFavoriteNumber }) {
  const handleClick = () => {
    setFavoriteNumber(number);
  };

  return (
    <button className="button" type="button" onClick={handleClick}>{number}</button>
  );
}

ButtonNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

ButtonNumber.propTypes = {
  number: PropTypes.number.isRequired,
  setFavoriteNumber: PropTypes.func.isRequired,
};

export default ButtonNumber;
