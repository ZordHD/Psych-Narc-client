import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, Row, Col} from "react-bootstrap";
import { Context } from '../..';
import { createPartners } from '../../http/partnersAPI';
import { observer } from 'mobx-react-lite';

const CreatePartners = observer(({show, onHide}) => {
    const { partners } = useContext(Context)
    const [partnerName, setPartnerName] = useState('')
    const [partnerImg, setPartnerImg] = useState(null)

    const selectFile = e => {
        setPartnerImg(e.target.files[0])
    }

    const addPartner = () => {
        const formData = new FormData()
        formData.append('name', partnerName)
        formData.append('image', partnerImg)
        createPartners(formData).then(data => onHide())
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
                    value={partnerName}
                    onChange={e => setPartnerName(e.target.value)}
                    className="mt-3"
                    placeholder="Введите название партнёра"
                />
                <Form.Control
                    onChange={selectFile}
                    className="mt-3"
                    placeholder="Выберите файл"
                    type="file"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addPartner}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
});

export default CreatePartners;