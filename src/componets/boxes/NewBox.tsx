import { Istate } from "../interfaces"
import { useState } from 'react'


interface passProduct {
    product: Istate['product']
    setProduct: React.Dispatch<React.SetStateAction<Istate['product']>>
}

const NewBox: React.FC<passProduct> = ({ product, setProduct }) => {

    const [imageLink, setImageLink] = useState('')
    const [productLink, setProductLink] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(0)


    const handleSubmit = (e: any) => {
        e.preventDefault()

        console.log("przed: "+product)

        const newID = product[0]? product[product.length-1].id + 1: 1;
        setProduct(array => [...array, {
            id: newID,
            imgLink: imageLink !== '' ? imageLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
            productLink: productLink,
            name: productName,
            price: price
        }])

        console.log("po: "+product)

        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: newID,
                imgLink: imageLink !== '' ? imageLink : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
                productLink: productLink,
                name: productName,
                price: price
            })
        }).then(() => {
            console.log('product added')
        })

    }
    return (
        <>
            <div className="window">
                <div className="image">
                    {/* <img src={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'} /> */}
                    <label>
                        URL zdjęcia:
                        <input
                            type="text"
                            name="URLimage"
                            value={imageLink}
                            onChange={(e) => setImageLink(e.target.value)}
                        />
                    </label>
                </div>
                <div className="description">
                    <div className="descriptionText">
                        <h3 style={{ marginTop: '-10px' }}>
                            <label>
                                Link produktu:
                                <input
                                    type="text"
                                    name="productLink"
                                    value={productLink}
                                    onChange={(e) => setProductLink(e.target.value)}
                                    required
                                />

                            </label>
                            <label>
                                Nazwa:
                                <input
                                    type="text"
                                    name="name"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    required
                                />

                            </label>
                            <label>
                                Cena:
                                <input
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                                    required
                                /> zł
                            </label>
                        </h3>
                    </div>
                    <div className="descriptionImg">
                        <input type="submit" value="+" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewBox