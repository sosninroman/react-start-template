import React from 'react'
import "./layout.css"
import { Header } from "../header/Header"

export const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header></Header>
            {children}
        </div>
    )
}