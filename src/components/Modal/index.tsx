import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ModalFormProps {
    nameButton: string;
    nameButtonExecute: string;
    title: string;
    children?: React.ReactNode;
    onExecute: <T>(props: T) => void;
}

const ModalForm = ({ nameButton, nameButtonExecute, title, children, onExecute }: ModalFormProps): JSX.Element => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleOnExecute() {
        onExecute(null);
        handleClose();
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {nameButton}
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" key={`modal-${title}`} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={handleOnExecute}>
                        {nameButtonExecute}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalForm;
