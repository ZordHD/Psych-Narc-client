import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PlayIconWhite from '../assets/PlayIconWhite.svg'
import ProfS from '../assets/ProfS.png'
import BRSM from '../assets/BRSM.png'
import BelRus from '../assets/BelRus.png'
import VisMus from '../assets/VisMus.png'
import '../styles/images-styles.css'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import HallOfFame from "../components/HallOfFame";
const TeamNews = () => {
    return (
        <>
        <NavBar/>
        <section id="Public-Organizations">
            <div className="display-2 mt-3">Общественные организации</div>
            <Container className="mt-5" style={{width:'80vw'}}>
                <Row xs={1}>
                    <Col className="col-md-4 col-lg-4">
                        <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={ProfS} style={{maxWidth:'100%', height:'100%'}} alt='Профсоюз'/>
                        </Card>
                    </Col>
                    <Col className="block-Standart col-md-1 col-lg-1" style={{maxWidth:'50px'}}>
                        <div className="lineDiv-2"/>
                    </Col>
                    <Col className="col-md-7 col-lg-7">
                        <div className="title-Text-2" style={{textAlign:'left', color:'#3D9378'}}>
                            Профсоюз
                        </div>
                        <div className="body-Regular mt-4" style={{color:'#3D9378'}}>
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
                <Row xs={1} className="mt-5">
                    <Col className="col-md-3 col-lg-4">
                        <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={BRSM} style={{maxWidth:'100%', height:'100%'}} alt='БРСМ'/>
                        </Card>
                    </Col>
                    <Col className="block-Standart col-md-1 col-lg-1" style={{maxWidth:'50px'}}>
                        <div className="lineDiv-2"/>
                    </Col>
                    <Col className="col-md-7 col-lg-7">
                        <div className="title-Text-2" style={{textAlign:'left', color:'#3D9378'}}>
                            БРСМ
                        </div>
                        <div className="body-Regular mt-4" style={{color:'#3D9378'}}>
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
                <Row xs={1} className="mt-5">
                    <Col className="col-md-3 col-lg-4">
                        <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={BelRus} style={{maxWidth:'100%', height:'100%'}} alt='Белая Русь'/>
                        </Card>
                    </Col>
                    <Col className="block-Standart col-md-1 col-lg-1" style={{maxWidth:'50px'}}>
                        <div className="lineDiv-2"/>
                    </Col>
                    <Col className="col-md-7 col-lg-7">
                        <div className="title-Text-2" style={{textAlign:'left', color:'#3D9378'}}>
                            Белая Русь
                        </div>
                        <div className="body-Regular mt-4" style={{color:'#3D9378'}}>
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
            <div style={{display:'flex', justifyContent:'flex-end', paddingRight:'12%'}}>
                <Button className='button-3 mt-5' style={{border:'none'}}>
                    Подробнее
                </Button>
            </div>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Visual-Museum">
            <div className="display-2 mt-4">Визуальный музей</div>
            <Container className="block-Standart mt-5">
                <Row>
                    <Col>
                        <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={VisMus} style={{maxWidth:'100%', height:'100%'}}alt='Визуальный музей'/>
                            <img src={PlayIconWhite} alt="Запуск" className="icon-Container icons"/>
                            <div className="image-Deco-2">
                                <div className="flex-wrap block-Standart">
                                    <div className="gradient mb-3" style={{height:'15px', width:'50%'}}/>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div style={{display:'flex', justifyContent:'flex-end', paddingRight:'13%'}}>
                <Button className='button-3 mt-5' style={{border:'none'}}>
                    Подробнее
                </Button>
            </div>
            <div className="section-Divider mt-5 mb-3"/>
        </section>

        <section id="Hall-Of-Fame">
            <div className="display-2 mt-4">Доска почёта</div>
            <HallOfFame/>
        </section>

        <Footer/>
        </>
    );
};

export default TeamNews;