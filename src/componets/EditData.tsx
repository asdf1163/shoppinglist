import React, { useState, useContext, useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { EditContext } from "./context/Edit";
import { Istate, ItoggleButton } from "./interfaces";

interface Iprops2 {
    setToggleButton: React.Dispatch<React.SetStateAction<ItoggleButton['toggleButton']>>
}

interface Iprops3 {
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

const EditForm: React.FC<Iprops2 & Iprops3> = ({ product, setProduct, setToggleButton }) => {
    const { productID } = useContext(EditContext)

    useEffect(() => {
        setEditImgLink(product[productID - 1].imgLink)
        setEditName(product[productID - 1].name)
        setEditPrice(product[productID - 1].price)
        setEditProduktLink(product[productID - 1].productLink)
        setEditAddInfo(product[productID - 1].additionalInfo)
    }, [productID])

    const [editImgLink, setEditImgLink] = useState(product[productID - 1].imgLink)
    const [editName, setEditName] = useState(product[productID - 1].name)
    const [editPrice, setEditPrice] = useState(product[productID - 1].price)
    const [editProduktLink, setEditProduktLink] = useState(product[productID - 1].productLink)
    const [editAddInfo, setEditAddInfo] = useState(product[productID - 1].additionalInfo)


    const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()

        fetch('http://localhost:8000/products/' + productID, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: productID,
                imgLink: editImgLink !== '' ? editImgLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
                productLink: editProduktLink,
                name: editName,
                price: editPrice,
                additionalInfo: editAddInfo
            })
        }).then(() => {
            setProduct(product.map((item) =>
                item.id === productID ?
                    {
                        ...item, imgLink: editImgLink,
                        productLink: editProduktLink,
                        name: editName,
                        price: editPrice,
                        additionalInfo: editAddInfo
                    } :
                    item
            ))
            console.log(productID, editImgLink, editProduktLink, editName, editPrice.toFixed(2))
            setToggleButton(true)
            console.log('product updated')
        })
    }

    return (
        <form>
            <div className="edit">
                <div className="panel">
                    <div className="exit">
                        <VscClose color={'red'} size={35} onClick={() => setToggleButton(true)} />
                    </div>
                    <div className="leftPanel">
                        <img src={editImgLink} alt="none" />
                        <label>
                            Link do zdjęcia
                            <br />
                            <input
                                type='text'
                                id='editImgLink'
                                value={editImgLink}
                                onChange={(e) => setEditImgLink(e.target.value)}
                            />
                        </label>
                    </div>
                    <hr />
                    <div className="rightPanel">
                        <label>
                            Nazwa produktu:
                            <br />
                            <input
                                type='text'
                                id='editName'
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                            />
                        </label>
                        <label>
                            Cena produktu:
                            <br />
                            <input
                                type='number'
                                id='editPrice'
                                value={parseFloat(editPrice.toFixed(2))}
                                onChange={(e) => setEditPrice(parseFloat(e.target.value))}
                            />
                        </label>
                        <label>
                            Link do produktu: {productID}
                            <br />
                            <input
                                type='text'
                                id='editProduktLink'
                                value={editProduktLink}
                                onChange={(e) => setEditProduktLink(e.target.value)}
                            />
                        </label>
                        <label>
                            Dodatkowe informacje:
                            <br />
                            <textarea
                                id='editAddInfo'
                                value={editAddInfo}
                                onChange={(e) => setEditAddInfo(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="options">
                        <label>
                            <input
                                type='submit'
                                id='editSave'
                                value={'Zapisz'}
                                onClick={(e) => handleSubmit(e)}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default EditForm