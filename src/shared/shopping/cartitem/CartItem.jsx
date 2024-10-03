import { React } from "react"
import { Trash2 } from "lucide-react"
import "./cartitem.css"

export const CartItem = ({ title }) => {
    return (
        <div className="cart-item">
            <p className="cart-item__title">{title}</p>
            <div className="cart-item__remove-button">
                <Trash2 color="red" />
            </div>
        </div>
    )
}