import React from "react";
import NavBar from "../components/NavBar";
import Vacancie from "../components/Vacancie";
import '../styles/text-styles.css'
import Footer from "../components/Footer";

const Vacancies = () => {
    return (
        <>
        <NavBar/>
        <div className="display-1 mt-3">Актуальные вакансии</div>
        <Vacancie/>
        <Footer/>
        </>
    );
};

export default Vacancies;