import React from 'react';
import '../src/App.css';
import Router from './Router'
//import MenuCarta from './components/MenuCarta/MenuCarta'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="inicio">
          <Router />
        </section>
      </header>
    </div>
  );
}
export default App;