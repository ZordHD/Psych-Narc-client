import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Container, Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import appealsOrder from '../assets/appealsOrder.png'
import hotline from '../assets/hotline.png'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import '../styles/images-styles.css'
import Footer from "../components/Footer";
import AskQuestion from "../components/modals/AskQuestion";
import LeaveFeedback from "../components/modals/LeaveFeedback";
import LeaveThanks from "../components/modals/LeaveThanks";

const Appeals = () => {
    const [AskQuestionVisible, setAskQuestionVisible] = useState(false)
    const [LeaveFeedbackVisible, setLeaveFeedbackVisible] = useState(false)
    const [LeaveThanksVisible, setLeaveThanksVisible] = useState(false)
    return (
        <>
        <NavBar/>

        <section id="Appeals-Order">
            <Container className="mt-5" style={{width:'80vw'}}>
                    <Row xs={1} className="g-5">
                        <Col className="col-md-4 col-lg-4">
                            <Card style={{border:'none', height:'90%'}}>
                            <Card.Img variant="top" src={appealsOrder} style={{maxWidth:'100%', height:'100%'}}alt='Вакансия'/>
                            <div className="image-Deco">
                                <div className="flex-wrap block-Standart">
                                        <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                                    </div>
                                </div>
                                </Card>
                        </Col>
                        <Col className="col-md-8 col-lg-8">
                            <div className="display-2" style={{textAlign:'left'}}>
                                Порядок обращения граждан
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
                <div className="section-Divider mt-5 mb-1"/>
            </section>

            <section id="Hotline">
                <Container className="mt-5" style={{width:'80vw'}}>
                    <Row xs={1} className="g-5">
                        <Col className="col-md-8 col-lg-8">
                            <div className="display-2" style={{textAlign:'left'}}>
                                Телефон доверия
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
                        <Col className="col-md-4 col-lg-4" style={{marginTop:'70px'}}>
                            <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={hotline} style={{maxWidth:'100%', height:'100%'}}alt='Вакансия'/>
                            <div className="image-Deco">
                                <div className="flex-wrap block-Standart">
                                        <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className="section-Divider mt-5 mb-3"/>
            </section>

            <section id="Commentary">
                <div className="block-Standart">
                <Button onClick={() => setLeaveFeedbackVisible(true)} className="display-2" onCl style={{textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px', border:'none'}}>
                    Оставить отзыв
                </Button>
                </div>
                <div className="section-Divider mt-1 mb-3"/>

                <div className="block-Standart">
                <Button onClick={() => setLeaveThanksVisible(true)} className="display-2" style={{textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px', border:'none'}}>
                    Оставить благодарность
                </Button>
                </div>
                <div className="section-Divider mt-1 mb-3"/>

                <div className="block-Standart">    
                <Button onClick={() => setAskQuestionVisible(true)} className="display-2" style={{textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px', border:'none'}}>
                    Задать вопрос
                </Button>
                </div>
                <div className="section-Divider mt-1"/>
                <AskQuestion show={AskQuestionVisible} onHide={() => setAskQuestionVisible(false)}/>
                <LeaveFeedback show={LeaveFeedbackVisible} onHide={() => setLeaveFeedbackVisible(false)}/>
                <LeaveThanks show={LeaveThanksVisible} onHide={() => setLeaveThanksVisible(false)}/>
            </section>
            <Footer/>
        </>
    );
};

export default Appeals;