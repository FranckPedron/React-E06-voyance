import ButtonNumber from './ButtonNumber';

function Form() {
  return (
    <section>
      <form>
        <label htmlFor="numberInput">Dis-moi ton chiffre préféré, je te dirai qui tu es</label>
        <input id="numberInput" type="text" />
      </form>
      <div>
        <ButtonNumber number={0} />
        <ButtonNumber number={1} />
        <ButtonNumber number={2} />
        <ButtonNumber number={3} />
        <ButtonNumber number={4} />
        <ButtonNumber number={5} />
        <ButtonNumber number={6} />
        <ButtonNumber number={7} />
        <ButtonNumber number={8} />
        <ButtonNumber number={9} />
      </div>
      <p>Je ne vois rien pour l'instant</p>
    </section>
  );
}

export default Form;
