import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap"
import CreateVacancies from '../components/modals/CreateVacancies';

const AdminVacancies = () => {
    const [vacanciesVisible, setVacanciesVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setVacanciesVisible(true)}
            >
                Добавить вакансию
            </Button>
            <CreateVacancies show={vacanciesVisible} onHide={() => setVacanciesVisible(false)}/>
        </Container>
    );
};

export default AdminVacancies;