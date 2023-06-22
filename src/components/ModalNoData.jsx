import { useState } from 'react';
import { Modal, Button  } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalNoData = () => {

    const { dataDrink, setDataDrink } = useBebidas()

    const [show, setShow] = useState(!dataDrink);

    const handleClose = () => {
        setShow(false);
        setDataDrink(true)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>There are no drinks with that ingredient</Modal.Title>
            </Modal.Header>
            <Modal.Body>Maybe you misspelled the ingredient</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default ModalNoData
