import { useState } from "react";
import { Istate, ItoggleButton } from "../interfaces";
import NewBox from "./NewBox";
import Products from "./Products";

interface Iprops {
  setToggleButton: React.Dispatch<React.SetStateAction<ItoggleButton['toggleButton']>>
}

interface IsetProduct {
  product: Istate['product']
  setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}


const Box: React.FC<Iprops & IsetProduct> = ({ setToggleButton, product, setProduct }) => {
  // console.log(product)

  const [timeOut, setTimeOut] = useState<boolean>(false)

  return (
    <>

        {/* <AlertInfo message={'Produkt został dodany'} timeOut={timeOut} setTimeOut={setTimeOut} /> */}
      
      {product && <Products product={product} setProduct={setProduct} setToggleButton={setToggleButton} />}
      <NewBox product={product} setProduct={setProduct} />
    </>
  )
}

export default Box