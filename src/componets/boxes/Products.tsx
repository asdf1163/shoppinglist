import React from "react";
import { MdInfoOutline, MdShoppingCart, MdClose } from "react-icons/md";
// import { useHistory } from 'react-router-dom';
import { Istate } from '../interfaces'

interface Iprops
{
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

const Products: React.FC<Iprops> = ({ product, setProduct}) => {
    // console.log(product)
    const removeFromState = (ItemID: number) => {
        const items = product.filter((item: any) => item.id !== ItemID);
        setProduct(items)
        console.log('product deleted')
    }

    const handleClick = (id:number) => {
        fetch('http://localhost:8000/products/' + id, {
            method: 'DELETE',
        }).then(() => removeFromState(id))
    }

    return (
        <>
            {product.map((index) => (
                <div className="window" key={index.id}>
                    <div className="image">
                        <img src={index.imgLink} alt={'image' + (index.id)} />
                        <MdClose onClick={() => handleClick(index.id)} size={30}/>
                    </div>
                    <div className="description">
                        <div className="descriptionText">
                            <h3>{index.name}</h3>
                            <p>{index.price} zł</p>
                        </div>
                        <div className="descriptionImg">
                            <MdInfoOutline size={25} />
                            <a href={index.productLink} ><MdShoppingCart size={25} /></a>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default Products