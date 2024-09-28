import React from "react"
import "./modal.css"

export const Modal = ({ visible, children }) => {
    if (!visible) return null
    return <div className='modal-background'>
        <div className='modal-dialog'>
            <span className='modal-close'>
                &times;
            </span>
            <div className='modal-body'>
                {children}
            </div>
        </div>
    </div>
}