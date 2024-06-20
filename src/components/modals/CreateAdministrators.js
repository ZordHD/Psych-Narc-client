import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { createAdministrators } from '../../http/administratorsAPI';

const CreateAdministrators = ({show, onHide}) => {
    const {administrators} = useContext(Context)
    const [adminImg, setAdminImg] = useState(null)
    const [adminName, setAdminName] = useState('')
    const [adminPost, setAdminPost] = useState('')

    const selectFile = e => {
        setAdminImg(e.target.files[0])
    }

    const addAdministrators = () => {
        const formData = new FormData()
        formData.append('name', adminName)
        formData.append('text', adminPost)
        formData.append('image', adminImg)
        createAdministrators(formData).then(data => onHide())
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
                Добавить персонал
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите ФИО"
                    value={adminName}
                    onChange={e => setAdminName(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите должность"
                    value={adminPost}
                    onChange={e => setAdminPost(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Выберите фотографию"
                    type="file"
                    onChange={selectFile}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addAdministrators}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
}

export default CreateAdministrators