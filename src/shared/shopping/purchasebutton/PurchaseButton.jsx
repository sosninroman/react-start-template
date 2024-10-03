import { React } from "react"
import "./purchasebutton.css"
import classNames from 'classnames';

export const PurchaseButton = ({ additionalClass, count = 0 }) => {
    if (count > 0) {
        const classes = classNames('count-editor', additionalClass);
        return (
            <div className={classes}>
                <button className="button-operation">-</button>
                <input className="count-editor__input" type="number" readonly min={0} step={1} value={count} />
                <button className="button-operation">+</button>
            </div>
        )
    }
    else {
        const classes = classNames("button", additionalClass);
        return (
            <button className={classes}>Add to cart</button>
        )
    }
}