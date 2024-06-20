import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Map from '../assets/Map.png'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import '../fonts/font.css'
import '../styles/gradient.css'
import Footer from "../components/Footer";

const Contacts = () => {
    return (
        <>
        <NavBar/>
        <section id="Contact-Info">
            <Container className="mt-5" style={{width:'100vw'}}>
                    <Row xs={1} className="g-5">
                        <Col className="col-md-6 col-lg-6">
                            <div className="display-2" style={{textAlign:'left'}}>
                                Контактная  информация
                            </div>
                            <div className="caption-sm mt-5" style={{color:'#3D9378'}}>
                                Республика Беларусь, г. Гродно ул. Обухова 15
                            </div>
                            <div className="caption-sm mt-3" style={{color:'#3D9378'}}>
                                Индекс: <span className="caption-Gradient">230003</span>
                            </div>
                            <div className="caption-sm mt-3" style={{color:'#3D9378'}}>
                                Регистратура психиатрии: <span className="underlined-text caption-Gradient">+375 152 39-83-44</span>
                            </div>
                            <div className="caption-sm mt-3" style={{color:'#3D9378'}}>
                               Факс регистратуры: <span className="underlined-text caption-Gradient">8(0152) 39-83-32</span>
                            </div>
                            <div className="caption-sm mt-3" style={{color:'#3D9378'}}>
                                Регистратура наркологии: <span className="underlined-text caption-Gradient">+375 152 39-83-62</span>
                            </div>
                            <div className="caption-sm mt-3" style={{color:'#3D9378'}}>
                               Факс приёмная: <span className="underlined-text caption-Gradient">8(0152) 71-69-00</span>
                            </div>
                            <div className="caption-sm mt-3" style={{color:'#3D9378'}}>
                               Email: <span className="caption-Gradient">centr@mmcgrodno.by</span>
                            </div>
                            <div className="caption-sm" style={{color:'#3D9378'}}>
                               Email «Одно окно»: <span className="underlined-text caption-Gradient">zapros@mmcgrodno.by</span>
                            </div>
                            <div className="body-Semibold mt-3" style={{color:'#3D9378'}}>
                               Аптека: <span className="caption-Gradient">8-0152-39-83-53</span>
                            </div>
                            <div className="body-Semibold" style={{color:'#3D9378'}}>
                               Пост приёма посетителей: <span className="caption-Gradient">8-0152-39-83-55</span>
                            </div>
                            <div className="underlined-text title-Text-2 mt-5">
                                Реквизиты
                            </div>
                        </Col>
                        <Col className="col-md-6 col-lg-6">
                            <Card style={{border:'none', height:'100%'}}>
                                <Card.Img variant="top" src={Map} style={{width:'110%', height:'100%'}}alt='Вакансия'/>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    );
};

export default Contacts;