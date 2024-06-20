import React from "react";
import NavBar from "../components/NavBar";
import Documents from "../components/Documents";
import { Card, Col, Container, Row } from "react-bootstrap";
import '../styles/images-styles.css'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import Building from '../assets/Building.png'
import Mission from '../assets/Mission.png'
import PlayIcon from '../assets/PlayIcon.svg'
import Administration from "../components/Administration";
import Departments from "../components/Departments";
import MassMedia from "../components/MassMedia";
import Footer from "../components/Footer";

const Structure = () => {
    return (
        <>
        <NavBar/>
        <div className="display-1 mt-4">О центре</div>
        <section id="History">
            <Container className="mt-5" style={{width:'80vw'}}>
                <Row xs={1}>
                    <Col className="col-md-10 col-lg-4">
                        <Card style={{border:'none', height:'100%'}}>
                        <Card.Img variant="top" src={Building} style={{maxWidth:'100%', height:'100%'}}alt='Здание'/>
                        <div className="image-Deco">
                            <div className="flex-wrap block-Standart">
                                    <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                                </div>
                            </div>
                            </Card>
                    </Col>
                    <Col className="block-Standart col-md-1 col-lg-1" style={{maxWidth:'50px'}}>
                        <div className="lineDiv-2"/>
                    </Col>
                    <Col className="col-md-12 col-lg-7">
                        <div className="display-2" style={{textAlign:'left'}}>
                            История
                        </div>
                        <div className="body-Semibold mt-3" style={{color:'#3D9378'}}>
                            Lorem ipsum dolor sit amet consectetur.
                            Et elit dignissim purus facilisis nec.
                            Elit tellus sed in vivamus eget mollis sit auctor.
                            At varius eu habitant amet sapien lacinia felis.
                            Augue amet laoreet viverra interdum pharetra tempor nunc.
                            Eget et venenatis tempus eu. Arcu cras varius ultrices urna duis est in.
                            Ultricies ut mauris sapien lectus nam. Tellus justo ultrices consectetur suscipit enim massa.
                            Malesuada diam ornare non aenean in aliquam massa amet.
                            Accumsan lorem maecenas dui ipsum commodo nibh morbi sagittis sodales.
                            Convallis lacus morbi imperdiet semper mollis viverra faucibus fermentum.
                            Aenean iaculis sit maecenas vivamus. Est molestie ultrices pretium amet tristique eget tortor duis.
                            Convallis lacus morbi imperdiet semper mollis vi verra faucibus fermentum. 
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-3" style={{width:'80vw'}}>
                <Row>
                    <Col className="body-Semibold" style={{color:'#3D9378'}}>
                        Lorem ipsum dolor sit amet consectetur.
                        Pellentesque montes dictumst bibendum eu felis.
                        Scelerisque cursus ut tincidunt congue enim.
                        Massa porta metus ullamcorper at blandit ultrices.
                        Nascetur risus non mauris habitant aliquet sed diam.
                        Turpis molestie molestie adipiscing adipiscing mattis at turpis eget quis.
                        Ipsum duis senectus mauris nulla integer. Viverra tempor eget elementum sagittis tempor in sit.
                        Sollicitudin in amet faucibus non metus varius turpis elit habitant. Nisi lectus urna massa scelerisque in dictum.
                    </Col>
                </Row>
            </Container>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section className="Mission-And-Politics">
            <div className="display-2">Миссия и политика</div>
            <Container className="block-Standart mt-3">
                <Row>
                    <Col>
                        <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={Mission} style={{maxWidth:'100%', height:'100%'}}alt='Миссия'/>
                            <img src={PlayIcon} alt="Запуск" className="icon-Container icons"/>
                            <div className="image-Deco-2">
                                <div className="flex-wrap block-Standart">
                                    <div className="gradient mb-3" style={{height:'15px', width:'50%'}}/>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-3" style={{width:'76vw'}}>
                <Row>
                    <Col className="body-Semibold" style={{color:'#3D9378', textAlign:'center'}}>
                        Lorem ipsum dolor sit amet consectetur.
                        Pellentesque montes dictumst bibendum eu felis.
                        Scelerisque cursus ut tincidunt congue enim.
                        Massa porta metus ullamcorper at blandit ultrices.
                        Nascetur risus non mauris habitant aliquet sed diam.
                        Turpis molestie molestie adipiscing adipiscing mattis at turpis eget quis.
                        Ipsum duis senectus mauris nulla integer. Viverra tempor eget elementum sagittis tempor in sit.
                        Sollicitudin in amet faucibus non metus varius turpis elit habitant. Nisi lectus urna massa scelerisque in dictum.
                    </Col>
                </Row>
            </Container>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Documents">
            <div className="display-2">Документы</div>
            <Documents/>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Administration">
            <div className="display-2">Администрация</div>
            <Administration/>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Departments">
            <div className="display-2">Отделения</div>
            <Departments/>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Mass-Media">
            <div className="display-2">Мы в СМИ</div>
            <MassMedia/>
        </section>

        <Footer/>
        </>
    );
};

export default Structure;