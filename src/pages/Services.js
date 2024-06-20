import React from "react";
import NavBar from "../components/NavBar";
import LocalServices from "../components/LocalServices";
import ForeignServices from "../components/ForeignServices";
import Button from "react-bootstrap/Button";
import '../styles/utility-styles.css'
import OtherServices from "../components/OtherServices";
import Footer from "../components/Footer";

const Services = () => {
    return (
        <>
        <NavBar/>
        <div className="display-2 mt-3">Для граждан Республики Беларусь</div>
        <LocalServices/>
        <div className="section-Divider mt-4 mb-3"/>
        <div className="display-2 mt-3">Для иностранных граждан</div>
        <ForeignServices/>
        <div style={{display:'flex', justifyContent:'center', height:'100px'}}>
                <Button className='button-3 mt-4' style={{border:'none', width:'325px', fontSize:'16px', fontWeight:'700'}}>
                    Конверт валют
                </Button>
        </div>
        <div className="section-Divider mt-4 mb-3"/>
        <div className="display-2 mt-3">Прочие услуги</div>
        <OtherServices/>
        <Footer/>
        </>
    );
};

export default Services;