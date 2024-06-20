import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { createDepartments } from '../../http/departmentsAPI';

const CreateDepartments = ({show, onHide}) => {

    const { departments } = useContext(Context)
    const [depImg, setDepImg] = useState(null)
    const [depName, setDepName] = useState('')
    const [depText, setDepText] = useState('')
    const [depFullText, setDepFullText] = useState('')

    const selectFile = e => {
        setDepImg(e.target.files[0])
    }

    const addDepartment = () => {
        const formData = new FormData()
        formData.append('image', depImg)
        formData.append('name', depName)
        formData.append('text', depText)
        formData.append('fulltext', depFullText)
        createDepartments(formData).then(data => onHide())
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
                Добавить новость
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите название отделения"
                    value={depName}
                    onChange={e => setDepName(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите описание отделения"
                    value={depText}
                    onChange={e => setDepText(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Выберите изображение отделения"
                    type="file"
                    onChange={selectFile}
                />
                <Form.Group className="mt-3">
                    <Form.Control
                        value={depFullText} 
                        onChange={e => setDepFullText(e.target.value)}
                        as="textarea" 
                        rows={5} 
                        placeholder="Введите полное описание отделения"/>
                    </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addDepartment}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
}

export default CreateDepartments