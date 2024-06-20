import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import CreateHallOfFame from "../components/modals/CreateHallOfFame";

const AdminThirdPage = () => {
    const [halloffameVisible, setHallOfFameVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setHallOfFameVisible(true)}
            >
                Добавить персонал на доску почёта
            </Button>
            <CreateHallOfFame show={halloffameVisible} onHide={() => setHallOfFameVisible(false)}/>
        </Container>
    );
};

export default AdminThirdPage;