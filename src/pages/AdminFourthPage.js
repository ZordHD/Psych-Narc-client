import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import CreateServicesRB from '../components/modals/CreateServicesRB';
import CreateOtherServices from "../components/modals/CreateOtherServices";
import CreateForeignServices from "../components/modals/CreateForeignServices";

const AdminFourthPage = () => {
    const [servicesRBVisible, setServicesRBVisible] = useState(false)
    const [otherservicesVisible, setOtherServicesVisible] = useState(false)
    const [foreignservicesVisible, setForeignServicesVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setServicesRBVisible(true)}
            >
                Добавить услугу для граждан РБ
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setForeignServicesVisible(true)}
            >
                Добавить услугу для иностранных граждан
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setOtherServicesVisible(true)}
            >
                Добавить другую услугу
            </Button>
            <CreateServicesRB show={servicesRBVisible} onHide={() => setServicesRBVisible(false)}/>
            <CreateOtherServices show={otherservicesVisible} onHide={() => setOtherServicesVisible(false)}/>
            <CreateForeignServices show={foreignservicesVisible} onHide={() => setForeignServicesVisible(false)}/>
        </Container>
    );
};

export default AdminFourthPage;