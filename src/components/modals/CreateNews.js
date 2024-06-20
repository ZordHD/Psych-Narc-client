import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, Row, Col} from "react-bootstrap";
import { Context } from '../..';
import { createNews } from '../../http/newsAPI';
import { observer } from 'mobx-react-lite';
import NewsList from './NewsList';

const CreateNews = observer(({show, onHide}) => {
    const {news} = useContext(Context)
    const [newsHeader, setNewsHeader] = useState('')
    const [newsDescription, setNewsDescription] = useState('')
    const [newsDate, setNewsDate] = useState('')
    const [newsImg, setNewsImg] = useState(null)
    const [newsFullText, setNewsFullText] = useState('')

    const selectFile = e => {
        setNewsImg(e.target.files[0])
    }

    const addNews = () => {
        const formData = new FormData()
        formData.append('name', newsHeader)
        formData.append('text', newsDescription)
        formData.append('date', newsDate)
        formData.append('image', newsImg)
        formData.append('fulltext', newsFullText)
        createNews(formData).then(data => onHide())
    }

    const [showNewsList, setShowNewsList] = useState(false);

    const handleShowNewsList = () => {
        setShowNewsList(true);
      };
    
      const handleCloseNewsList = () => {
        setShowNewsList(false);
      };

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
                    value={newsHeader}
                    onChange={e => setNewsHeader(e.target.value)}
                    className="mt-3"
                    placeholder="Введите название новости"
                />
                <Form.Control
                    value={newsDescription}
                    onChange={e => setNewsDescription(e.target.value)}
                    className="mt-3"
                    placeholder="Введите текст новости"
                />
                <Form.Control
                    value={newsDate}
                    onChange={e => setNewsDate(e.target.value)}
                    className="mt-3"
                    placeholder="Введите дату"
                />
                <Form.Control
                    onChange={selectFile}
                    className="mt-3"
                    placeholder="Выберите файл"
                    type="file"
                />
                 <Form.Group className="mt-3">
                    <Form.Control
                        value={newsFullText} 
                        onChange={e => setNewsFullText(e.target.value)}
                        as="textarea" 
                        rows={5} 
                        placeholder="Введите полное описание новости"/>
                    </Form.Group>
            </Form>
            <Button variant="primary" className='mt-5' onClick={handleShowNewsList}>Новости</Button>

      {/* Список новостей */}
      <NewsList show={showNewsList} onHide={handleCloseNewsList} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={addNews}>Добавить</Button>
        </Modal.Footer>
        </Modal>
        );
});

export default CreateNews;