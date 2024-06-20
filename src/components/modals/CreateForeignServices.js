import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { Context } from '../..'; 
import { createForeignServices } from '../../http/foreignservicesAPI';

const CreateForeignServices = ({show, onHide}) => {
    const {foreignservices} = useContext(Context)

    const selectFile = e => {
        setServiceImg(e.target.files[0])
    }

    const [serviceImg, setServiceImg] = useState(null)
    const [serviceName, setServiceName] = useState('')
    const [serviceDescription, setServiceDescription] = useState('')
    const [serviceFullText, setServiceFullText] = useState('')

    const addServices = () => {
        const formData = new FormData()
        formData.append('name', serviceName)
        formData.append('text', serviceDescription)
        formData.append('image', serviceImg)
        formData.append('fulltext', serviceFullText)
        createForeignServices(formData).then(data => onHide())
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
                Добавить услугу для иностранных граждан
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-3"
                    value={serviceName}
                    onChange={e => setServiceName(e.target.value)}
                    placeholder="Введите название услуги"
                />
                <Form.Control
                    className="mt-3"
                    value={serviceDescription}
                    onChange={e => setServiceDescription(e.target.value)}
                    placeholder="Введите описание услуги"
                />
                <Form.Control
                    className="mt-3"
                    onChange={selectFile}
                    placeholder="Выберите файл"
                    type="file"
                />
                 <Form.Group className="mt-3">
                    <Form.Control
                        value={serviceFullText} 
                        onChange={e => setServiceFullText(e.target.value)}
                        as="textarea" 
                        rows={5} 
                        placeholder="Введите полное описание услуги"/>
                    </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addServices}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
}

export default CreateForeignServices