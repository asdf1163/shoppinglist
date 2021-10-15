import {useContext} from "react";
import { MdInfoOutline, MdShoppingCart, MdClose } from "react-icons/md";
import { EditContext } from "../context/Edit";
// import { useHistory } from 'react-router-dom';
import { Istate, ItoggleButton } from '../interfaces'

interface Iprops {
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

interface Iprops2 {
    setToggleButton: React.Dispatch<React.SetStateAction<ItoggleButton['toggleButton']>>
}

const Products: React.FC<Iprops&Iprops2>= ({ product, setProduct, setToggleButton }) => {
    // console.log(setToggleButton)

    const removeFromState = (ItemID: number) => {
        const items = product.filter((item: any) => item.id !== ItemID);
        setProduct(items)
        console.log('product deleted')
    }

    const handleClick = (id: number) => {
        fetch('http://localhost:8000/products/' + id, {
            method: 'DELETE',
        }).then(() => removeFromState(id))
    }

    const {setProductID} = useContext(EditContext)
    const handleEditClick = (id: number) => {
        
        setToggleButton(false)
        setProductID(id)
    }

    return (
        <>
            {product.map((index) => (
                <div className="window" key={index.id}>
                    <div className="image">
                        <img src={index.imgLink} alt={'image' + (index.id)} />
                        <MdClose onClick={() => handleClick(index.id)} size={30} />
                    </div>
                    <div className="description">
                        <div className="descriptionText">
                            <h3>{index.name}</h3>
                            <p>{index.price.toFixed(2)} zł</p>
                        </div>
                        <div className="descriptionImg">
                            <MdInfoOutline size={25} onClick={() => handleEditClick(index.id)} />
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