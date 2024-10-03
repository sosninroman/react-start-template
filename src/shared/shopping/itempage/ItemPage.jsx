import { React } from "react"
import { PurchaseButton } from "../purchasebutton/PurchaseButton"
import "./itempage.css"

export const ItemPage = ({ price, images, category, title, desc }) => {
    console.log(images, images.map(s => s + 1))
    return (
        <div>
            <div className="page__images" >
                {images.map((imageId) => {
                    return (
                        <img src={`https://prd.place/200/200?id=${imageId}`}></img>
                    )
                })}
            </div>
            <p>Item: {title}</p>
            <p>Description: {desc}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <PurchaseButton />
        </div>
    )
}