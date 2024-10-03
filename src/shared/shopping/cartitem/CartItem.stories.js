import { CartItem } from "./CartItem"

const meta = {
    title: 'Otus/Shopping/CartItem',
    component: CartItem,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text'
        },
    },
}

export default meta

export const Default = {
    args: {
        title: "Awesome thing",
    },
}