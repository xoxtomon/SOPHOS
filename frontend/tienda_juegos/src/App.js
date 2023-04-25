import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda Juegos</h1>
        <Card id="123" firstName="John" lastName="Doe" />
        <h3>Tienda Juegos</h3>
        <h3>Tienda Juegos</h3>
        <h3>Tienda Juegos</h3>
        <h3>Tienda Juegos</h3>
      </header>
      <Card id="123" firstName="John" lastName="Doe" />
    </div>
  );
}

export default App;
