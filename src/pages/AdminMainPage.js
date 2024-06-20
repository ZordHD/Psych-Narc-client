import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import CreateNews from "../components/modals/CreateNews";
import CreateServices from "../components/modals/CreateServices";
import CreatePartners from "../components/modals/CreatePartners";
import CreateGallery from "../components/modals/CreateGallery";
import CreateLine from '../components/modals/CreateLine';

const AdminMainPage = () => {
    const [newsVisible, setNewsVisible] = useState(false)
    const [servicesVisible, setServicesVisible] = useState(false)
    const [partnersVisible, setPartnersVisible] = useState(false)
    const [galleryVisible, setGalleryVisible] = useState(false)
    const [lineVisible, setLineVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setNewsVisible(true)}
            >
                Добавить новость
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setServicesVisible(true)}
            >
                Добавить услуги
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setPartnersVisible(true)}
            >
                Добавить партнёра
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setGalleryVisible(true)}
            >
                Добавить фото в галерею
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setLineVisible(true)}
            >
                Добавить текст в бегущую строку
            </Button>
            <CreateNews show={newsVisible} onHide={() => setNewsVisible(false)}/>
            <CreateServices show={servicesVisible} onHide={() => setServicesVisible(false)}/>
            <CreatePartners show={partnersVisible} onHide={() => setPartnersVisible(false)}/>
            <CreateGallery show={galleryVisible} onHide={() => setGalleryVisible(false)}/>
            <CreateLine show={lineVisible} onHide={() => setLineVisible(false)}/>

        </Container>
    );
};

export default AdminMainPage;