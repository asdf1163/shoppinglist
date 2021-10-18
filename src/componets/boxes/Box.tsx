import { useContext } from "react";
import { AlertInfoxtContext } from "../context/AlertInfo";
import { IAlertInfo, Istate, ItoggleButton } from "../interfaces";
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
  
  const {setMessage,setTimeOut} = useContext<IAlertInfo|any>(AlertInfoxtContext)
  return (
    <>

        {/* <AlertInfo message={'Produkt został dodany'} timeOut={timeOut} setTimeOut={setTimeOut} /> */}
      
      <Products product={product} setProduct={setProduct} setToggleButton={setToggleButton} setMessage={setMessage} setTimeOut={setTimeOut} />
      <NewBox product={product} setProduct={setProduct} setMessage={setMessage} setTimeOut={setTimeOut}/>
    </>
  )
}

export default Box