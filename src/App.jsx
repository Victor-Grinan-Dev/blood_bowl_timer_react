import './App.css';
import backgroundImg from './assets/blood_bowl_tall.jpg';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <img className="backgroundImg" src={backgroundImg} alt="background image" />
      <Menu />
    </div>
  );
}

export default App;
