import './App.css';
import { useState, useEffect, SetStateAction } from 'react'
import Header from './componets/Header'
import Box from './componets/boxes/Box'
import { Istate, ItoggleButton } from './componets/interfaces';
import EditForm from './componets/EditData';
import { AlertInfoProvider } from './componets/context/AlertInfo';

function App(): JSX.Element {
  const [toggleButton, setToggleButton] = useState<ItoggleButton['toggleButton']>(true)
  const [product, setProduct] = useState<Istate['product']>(JSON.parse(localStorage.getItem('items')|| '[]'))
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(product))
  }, [product])
      
  return (
    <div className="App">
      <main>
        <AlertInfoProvider setMessage={function (value: SetStateAction<string>): void {
          throw new Error('Function not implemented.');
        } } setTimeOut={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        } } >
        {product[0] &&
          <div style={{ display: toggleButton === false ? 'block' : 'none' }}>
            <EditForm setToggleButton={setToggleButton} product={product} setProduct={setProduct}/>
          </div>
        }
        <Header />
        <div className="main">
          <Box setToggleButton={setToggleButton} product={product} setProduct={setProduct} />
        </div>
        <div className="footer">
        </div>
        </AlertInfoProvider>
      </main>
    </div>
  );
}

export default App;
