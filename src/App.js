import './App.css';
import Bands from './Components/Bands/Bands';

function App() {
  return (
    <div className="concert-container">
      <div className="bands-container">
        <Bands></Bands>
      </div>
      <div className="cart-container">
        <h4>My Cart</h4>
      </div>
    </div>
  );
}

export default App;
