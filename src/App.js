import './App.css';
import Bands from './Components/Bands/Bands';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="website-container">
      {/* calling all components to show in website  */}
      <Header></Header>
      <Bands></Bands>
      <Footer></Footer>
    </div>
  );
}

export default App;
