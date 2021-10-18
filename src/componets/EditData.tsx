import React, { useState, useContext, useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { AlertInfoxtContext } from "./context/AlertInfo";
import { EditContext } from "./context/Edit";
import { IAlertInfo, Istate, ItoggleButton } from "./interfaces";

interface Iprops2 {
    setToggleButton: React.Dispatch<React.SetStateAction<ItoggleButton['toggleButton']>>
}

interface Iprops3 {
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

const EditForm: React.FC<Iprops2 & Iprops3> = ({ product, setProduct, setToggleButton }) => {
    const { productID, arrayID } = useContext(EditContext)
    const { setMessage, setTimeOut } = useContext<IAlertInfo | any>(AlertInfoxtContext)

    useEffect(() => {
        setEditImgLink(product[arrayID].imgLink)
        setEditName(product[arrayID].name)
        setEditPrice(product[arrayID].price)
        setEditProduktLink(product[arrayID].productLink)
        setEditAddInfo(product[arrayID].additionalInfo)
    }, [arrayID, product])

    const [editImgLink, setEditImgLink] = useState(product[arrayID].imgLink)
    const [editName, setEditName] = useState(product[arrayID].name)
    const [editPrice, setEditPrice] = useState(product[arrayID].price)
    const [editProduktLink, setEditProduktLink] = useState(product[arrayID].productLink)
    const [editAddInfo, setEditAddInfo] = useState(product[arrayID].additionalInfo)


    const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()
        setProduct(product.map((item) =>
            item.id === productID ?
                {
                    ...item, imgLink: editImgLink !== '' ? editImgLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
                    productLink: editProduktLink,
                    name: editName,
                    price: isNaN(editPrice) ? 0 : editPrice,
                    additionalInfo: editAddInfo
                } :
                item
        ))
        setToggleButton(true)
        setMessage('Product has been changed!')
        setTimeOut(true)
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
                            URL to image:
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
                            Product name:
                            <br />
                            <input
                                type='text'
                                id='editName'
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                            />
                        </label>
                        <label>
                            Product price:
                            <br />
                            <input
                                type='number'
                                id='editPrice'
                                value={parseFloat(editPrice.toFixed(2))}
                                onChange={(e) => setEditPrice(parseFloat(e.target.value))}
                            />
                        </label>
                        <label>
                            URL to product:
                            <br />
                            <input
                                type='text'
                                id='editProduktLink'
                                value={editProduktLink}
                                onChange={(e) => setEditProduktLink(e.target.value)}
                            />
                        </label>
                        <label>
                            Additional information:
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