import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import FormHandler from './components/FormHandler';
import Pound from './converter/Pound';
import Usd from './converter/Usd';
// import Toggle from './components/Toggle';

function App() {
  // render props pattern is used to pass function as props and this function return Ui so we not implement ui render logic
  return (
    <>
      <h1>Learning Render Props</h1>
      {/* <Toggle
        flag={true}
        render={(isOn) => {
          return isOn ? <div>I am on</div> : <p>I am off</p>;
        }}
      /> */}
      {/* //we can use it is like children we pass render props as a children */}
      {/* <Toggle flag={true}>
        {(isOn) => {
          return isOn ? <h3>Toggle is on</h3> : <h4> Toggle is Off</h4>;
        }}
      </Toggle> */}
      {/* <FormHandler
        render={({ formData, error, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="enter username. . ."
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="enter password. . ."
                onChange={handleChange}
              />

              <button type="submit">Submit</button>
              <div>{error.msg && error.msg}</div>
            </form> */}
      {/* ); */}
      {/* }} */}
      {/* /> */}
      <h3>Lifting State Up Using Render Props</h3>
      <CurrencyConverter
        render={(amount) => {
          return (
            <>
              <Usd amount={amount} />
              <Pound amount={amount} />
            </>
          );
        }}
      />
    </>
  );
}

export default App;
