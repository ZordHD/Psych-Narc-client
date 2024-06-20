import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { Context } from '../..';
import { createHallOfFame } from '../../http/halloffameAPI';

const CreateHallOfFame = ({show, onHide}) => {
    const { halloffame} = useContext(Context)
    const [hofImg, setHofImg] = useState(null)
    const [hofName, setHofName] = useState('')
    const [hofText, setHofText] = useState('')
    const [hofPost, setHofPost] = useState('')

    const selectFile = e => {
        setHofImg(e.target.files[0])
    }

    const addHallOfFame = () => {
        const formData = new FormData()
        formData.append('name', hofName)
        formData.append('text', hofText)
        formData.append('post', hofPost)
        formData.append('image', hofImg)
        createHallOfFame(formData).then(data => onHide())
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
                Добавить персонал на доску почёта
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value={hofName}
                    onChange={e => setHofName(e.target.value)}
                    className="mt-3"
                    placeholder="Введите Ф.И.О"
                />
                <Form.Control
                    value={hofPost}
                    onChange={e => setHofPost(e.target.value)}
                    className="mt-3"
                    placeholder="Введите должность"
                />
                <Form.Control
                    value={hofText}
                    onChange={e => setHofText(e.target.value)}
                    className="mt-3"
                    placeholder="Введите описание"
                />
                <Form.Control
                    onChange={selectFile}
                    className="mt-3"
                    placeholder="Выберите фотографию"
                    type="file"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addHallOfFame}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
}

export default CreateHallOfFame