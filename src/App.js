import "./App.css";
import cat from "./cat1.jpg";
import cat2 from "./cat2.jpg";
import cat3 from "./cat3.jpg";
import cat4 from "./cat4.jpg";

function App() {
  return (
      <div className="App">
      <h1>Cat Store</h1>

      <div className='position'>
        <div>
      <img src={cat} className="img" />
      <h3>name:cat1</h3>
      <h5>Age:2Yers</h5>
      </div>
      <div>
      <img src={cat2} className="img" />
      <h3>name:cat2</h3>
      <h5>Age:1Yers</h5>
      </div>

      <div>
      <img src={cat3} className="img" />
      <h3>You have to provide a name</h3>
      <h5>Age:4Yers</h5>
      </div>
      <div>
      <img src={cat4} className="img" />
      <h3>name:cat4</h3>
      <h5>Age:3Yers</h5>
      </div>
      </div> 
      </div>

  );
}

export default App;
