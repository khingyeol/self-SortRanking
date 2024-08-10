import logo from "./logo.svg";
import "./App.css";

function App() {
  var img =
    "https://i.pinimg.com/474x/f8/61/b5/f861b56f481b6f416570f27e1ddbe38c.jpg";
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>Hi hello</p>
      </header>
    </div>
  );
}

export default App;
