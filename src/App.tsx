import './App.css';
import { useState } from 'react'
import Header from './componets/Header'
import Box from './componets/boxes/Box'
import { Icart } from './componets/interfaces';

function App() {
  const [cart, setCart] = useState<Icart['cart']>([])

  return (
    <div className="App">
      <main>
        <Header />
        <div className="main">
          <Box cart={cart} />
        </div>
        <div className="footer">
        </div>
      </main>
    </div>
  );
}

export default App;
