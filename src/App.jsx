
import './App.css';

function App({main = "SUBSCRIBE", button = "Subscribe" }) {
  return (
    <div id="main">
      <br />
      <div id="header"><h1>{ main }</h1></div>
      <div id="text"><h4>Sign up with your email address to receive news and updates.</h4></div>
      <form id="middle">
        <input className="input" type="text" placeholder="First name" name="" id="" />
        <input className="input" type="text" placeholder="Last name" name="" id="" />
        <input className="input" type="text" placeholder="Email" name="" id="" />
      </form>
      <div id="bottom">
        <button id="button">{ button }</button>
      </div>
    </div>
  );
}

export default App;
