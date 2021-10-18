import { useContext } from "react";
import { MdInfoOutline, MdShoppingCart, MdClose } from "react-icons/md";
import { EditContext } from "../context/Edit";
import { Istate, ItoggleButton, IAlertInfo } from '../interfaces'

interface Iprops {
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

interface Iprops2 {
    setToggleButton: React.Dispatch<React.SetStateAction<ItoggleButton['toggleButton']>>
}

const Products: React.FC<Iprops & Iprops2 & IAlertInfo> = ({ product, setProduct, setToggleButton, setMessage, setTimeOut}) => {
    const { setProductID, setArrayID } = useContext(EditContext)


    const handleClick = (ItemID: number) => {
        setProductID(0)
        setArrayID(0)
        setMessage('Product has been deleted')
        setTimeOut(true)
        
        const items = product.filter((item: any) => item.id !== ItemID);
        setProduct(items)
    }


    const handleEditClick = (idP: number, idA: number) => {
        setProductID(idP)
        setArrayID(idA)
        setToggleButton(false)
    }

    return (
        <>
            {product.map((index,intiger) => (
                <div className="window" key={index.id}>
                    <div className="image">
                        <img src={index.imgLink} alt={String(index.id)} />
                        <MdClose onClick={() => handleClick(index.id)} size={30} />
                    </div>
                    <div className="description">
                        <div className="descriptionText">
                            <h3>{index.name}</h3>
                            <p>{index.price.toFixed(2)} zł</p>
                        </div>
                        <div className="descriptionImg">
                            <MdInfoOutline size={25} onClick={() => handleEditClick(index.id, intiger)} />
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