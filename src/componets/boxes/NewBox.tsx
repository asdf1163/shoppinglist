import { IAlertInfo, Istate } from "../interfaces"
import { useState } from 'react'
import { IoAdd, IoCloseOutline } from "react-icons/io5";

interface passProduct {
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

const NewBox: React.FC<passProduct & IAlertInfo> = ({ product, setProduct, setMessage, setTimeOut }) => {

    const [imageLink, setImageLink] = useState('')
    const [productLink, setProductLink] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(0)
    const [additionalInfo, setAdditionalInfo] = useState('')
    const [toggleAddButton, setToggleAddButton] = useState(false)
    // const [timeOut, setTimeOut] = useState<boolean>(false)

    const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()

        const newID = product[0] ? product[product.length - 1].id + 1 : 0;
        setProduct(array => [...array, {
            id: newID,
            imgLink: imageLink !== '' ? imageLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
            productLink: productLink,
            name: productName,
            price: parseFloat(price.toFixed(2)),
            additionalInfo: additionalInfo
        }])

        setImageLink('')
        setProductLink('')
        setProductName('')
        setPrice(0)
        setAdditionalInfo('')
        setToggleAddButton(false)
        setMessage('Product added')
        setTimeOut(true)
    }
    return (
        <><div className="addButtonWindow">
            <IoAdd onClick={() => setToggleAddButton(true)} style={{ display: toggleAddButton === true ? 'none' : 'block' }} size={35} />
        </div>
            <form>
                <div className="edit" style={{ top: '0', left: '0', display: toggleAddButton === false ? 'none' : 'flex' }}>
                    <div className="panel">
                        <div className="exit">
                            <IoCloseOutline onClick={() => setToggleAddButton(false)} size={35} color="red" />
                        </div>
                        <div className="leftPanel">
                            <img src={imageLink !== '' ? imageLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png'} alt="none" />
                            <label>
                                URL to image:
                                <br />
                                <input
                                    type='text'
                                    id='imageLink'
                                    value={imageLink}
                                    onChange={(e) => setImageLink(e.target.value)} />
                            </label>
                        </div>
                        <hr />
                        <div className="rightPanel">
                            <label>
                                Product name:
                                <br />
                                <input
                                    type='text'
                                    id='productName'
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)} />
                            </label>
                            <label>
                                Product price:
                                <br />
                                <input
                                    type='number'
                                    id='price'
                                    value={parseFloat(price.toFixed(2))}
                                    onChange={(e) => setPrice(parseFloat(e.target.value))} />
                            </label>
                            <label>
                                URL to product:
                                <br />
                                <input
                                    type='text'
                                    id='editProduktLink'
                                    value={productLink}
                                    onChange={(e) => setProductLink(e.target.value)} />
                            </label>
                            <label>
                                Additional information:
                                <br />
                                <textarea
                                    id='editAddInfo'
                                    value={additionalInfo}
                                    onChange={(e) => setAdditionalInfo(e.target.value)} />
                            </label>
                        </div>
                        <div className="options">
                            <label>
                                <input
                                    type='submit'
                                    id='editSave'
                                    value={'Zapisz'}
                                    onClick={(e) => handleSubmit(e)} />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default NewBox