import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { Context } from '../..';
import { createLine } from '../../http/lineAPI';

const CreateLine = ({show, onHide}) => {

    const { line } = useContext(Context)

    const [lineText, setLineText] = useState('')

    const addLine = () => {
        const formData = new FormData()
        formData.append('text', lineText)
        createLine(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить текст в бегущую строку
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите текст для бегущей строки"
                    value={lineText}
                    onChange={e => setLineText(e.target.value)}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addLine}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
}

export default CreateLine