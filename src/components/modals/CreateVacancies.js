import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, Row, Col} from "react-bootstrap";
import { Context } from '../..';
import { createVacancies } from '../../http/vacanciesAPI';

const CreateVacancies = ({show, onHide}) => {

    const { vacancies } = useContext(Context)
    const [vacancieImg, setVacancieImg] = useState(null)
    const [vacancieName, setVacancieName] = useState('')
    const [vacancieWage, setVacancieWage] = useState('')
    const [vacancieText, setVacancieText] = useState('')
    const [info, setInfo] = useState([])

    const selectFile = e => {
        setVacancieImg(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const addVacancie = () => {
        const formData = new FormData()
        formData.append('name', vacancieName)
        formData.append('text', vacancieText)
        formData.append('price', vacancieWage)
        formData.append('image', vacancieImg)
        createVacancies(formData).then(data => onHide())
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
                Добавить вакансию
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите должность"
                    value={vacancieName}
                    onChange={e => setVacancieName(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите описание вакансии"
                    value={vacancieText}
                    onChange={e => setVacancieText(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите зарплату"
                    value={vacancieWage}
                    onChange={e => setVacancieWage(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Выберите изображение"
                    type="file"
                    onChange={selectFile}
                />
                <hr/>
                <Button
                    variant={"outline-dark"}
                    onClick={addInfo}
                >
                    Добавить описание
                </Button>
                {
                    info.map(i =>
                        <Row classname="mt-4" key={i.number}>
                            <Col md={4}>
                            <Form.Control
                                className="nt-3"
                                placeholder="Введите название новости"
                                type="text"
                            />
                            </Col>
                            <Col md={4}>
                            <Form.Control
                                className="nt-3"
                                placeholder="Введите описание новости"
                                type="text"
                            />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>Удалить</Button>
                            </Col>
                        </Row>
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addVacancie}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
}

export default CreateVacancies