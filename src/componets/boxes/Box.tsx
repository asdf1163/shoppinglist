import { useState, useEffect, useRef } from "react";
import { Istate, Icart } from "../interfaces";
import NewBox from "./NewBox";
import Products from "./Products";

const Box = ({ cart }: Icart) => {

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
            setProduct(array => [...array, data[intiger.current]])
          ),
          intiger.current++;
        })
      })
  }, [])

  // console.log(product)
  return (
    <>
      {product && <Products product={product} setProduct={setProduct}/>}
      <NewBox product={product} setProduct={setProduct} />
    </>
  )
}

export default Box