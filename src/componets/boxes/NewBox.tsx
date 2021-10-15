import { Istate } from "../interfaces"
import { useState } from 'react'
import { IoAdd, IoCloseOutline } from "react-icons/io5";

interface passProduct {
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

const NewBox: React.FC<passProduct> = ({ product, setProduct }) => {

    const [imageLink, setImageLink] = useState('')
    const [productLink, setProductLink] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(0)
    const [additionalInfo, setAdditionalInfo] = useState('')
    const [toggleAddButton, setToggleAddButton] = useState(false)
    const [timeOut, setTimeOut] = useState<boolean>(false)

    const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()

        const newID = product[0] ? product[product.length - 1].id + 1 : 1;
        setProduct(array => [...array, {
            id: newID,
            imgLink: imageLink !== '' ? imageLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
            productLink: productLink,
            name: productName,
            price: parseFloat(price.toFixed(2)),
            additionalInfo: additionalInfo
        }])

        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: newID,
                imgLink: imageLink !== '' ? imageLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
                productLink: productLink,
                name: productName,
                price: parseFloat(price.toFixed(2)),
                additionalInfo: additionalInfo
            })
        }).then(() => {
            setTimeOut(true)
            console.log('product added')
            setImageLink('')
            setProductLink('')
            setProductName('')
            setPrice(0)
            setAdditionalInfo('')
            setToggleAddButton(false)
        })

    }
    return (
        <>
            <div className="addButtonWindow">
                <IoAdd onClick={() => setToggleAddButton(true)} style={{ display: toggleAddButton === true ? 'none' : 'block' }} size={35} />
            </div>
            <div className="edit" style={{ top: '0', display: toggleAddButton === false ? 'none' : 'flex' }}>
                <div className="panel">
                    <div className="exit">
                        <IoCloseOutline onClick={() => setToggleAddButton(false)} size={35} color="red" />
                    </div>
                    <div className="leftPanel">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png'} alt="none" />
                        <label>
                            Link do zdjęcia
                            <br />
                            <input
                                type='text'
                                id='imageLink'
                                value={imageLink}
                                onChange={(e) => setImageLink(e.target.value)}
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
                                id='productName'
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </label>
                        <label>
                            Cena produktu:
                            <br />
                            <input
                                type='number'
                                id='price'
                                value={parseFloat(price.toFixed(2))}
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                            />
                        </label>
                        <label>
                            Link do produktu:
                            <br />
                            <input
                                type='text'
                                id='editProduktLink'
                                value={productLink}
                                onChange={(e) => setProductLink(e.target.value)}
                            />
                        </label>
                        <label>
                            Dodatkowe informacje:
                            <br />
                            <textarea
                                id='editAddInfo'
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.target.value)}
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
        </>
    )
}

export default NewBox