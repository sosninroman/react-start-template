import { Modal } from './Modal'

const meta = {
    title: 'Otus/Common/Modal',
    component: Modal,
    argTypes: {
        visible: { control: 'boolean' },
    },
}

export default meta

export const Default = {
    args: {
        visible: true,
        children: [<p style={{ textAlign: "center" }}>"Hello, World!" </p>]
    },
}