import './App.css';
import { useState, useEffect, useRef } from 'react'
import Header from './componets/Header'
import Box from './componets/boxes/Box'
import { Istate, ItoggleButton } from './componets/interfaces';
import EditForm from './componets/EditData';



function App(): JSX.Element {
  const [toggleButton, setToggleButton] = useState<ItoggleButton['toggleButton']>(true)
  const [product, setProduct] = useState<Istate['product']>([])
  const intiger = useRef(0);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => {
        return res.json()
      })
      .then(data => {
        data.map(() => {
          return (
            setProduct((array) => [...array, data[intiger.current]])
          ),
            intiger.current++;
        })
      })
  }, [])

  return (
    <div className="App">
      <main>
        {product[0] &&
          <div style={{ display: toggleButton === false ? 'block' : 'none' }}>
            <EditForm setToggleButton={setToggleButton} product={product} setProduct={setProduct} />
          </div>
        }
        <Header />
        <div className="main">
          <Box setToggleButton={setToggleButton} product={product} setProduct={setProduct} />
        </div>
        <div className="footer">
        </div>
      </main>
    </div>
  );
}

export default App;
