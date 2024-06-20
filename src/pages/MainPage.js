import React, { useContext, useEffect } from "react";
import NavBar from '../components/NavBar';
import NewsCards from "../components/NewsCards";
import PopularServices from "../components/PopularServices";
import Partners from "../components/Partners";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Marquee from 'react-fast-marquee';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hotline from '../assets/Hotline.svg'
import WorkHours from '../assets/ic_access_time_48px.svg'
import Place from '../assets/Place.svg'
import Building from '../assets/Building.png'
import HumProd from '../assets/HumProd.svg'
import helpline from '../assets/helpline.svg'
import CheckMark from '../assets/CheckMark.svg'
import VKicon from '../assets/VKicon.svg'
import SkypeIcon from '../assets/SkypeIcon.svg'
import MailIcon from '../assets/MailIcon.svg'
import '../styles/gradient.css'
import '../styles/text-styles.css'
import '../fonts/font.css';
import '../styles/images-styles.css'
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchLine } from "../http/lineAPI";
import { Card, CardImg } from "react-bootstrap";

const MainPage = observer(() => {
    const { departments } = useContext(Context)
    const {user} = useContext(Context)

    console.log(departments)
    console.log(user)

    const { line } = useContext(Context);

            useEffect(() => {
            fetchLine().then(data => {
                line.setLine(data);
            });
            }, [line]);

    return (
        <>
        <Container className="mt-3 mb-3 block-Standart" style={{width: '100vw'}}>
            <Row  xs={1} className="block-Standart row-header">
                <Col className="col-md-1 col-lg-1 block-Standart col-icon-header">
                <img src={Hotline} alt="Горячая линия" className="ms-2"/>
                </Col>
                <Col className="col-md-3 col-lg-3 col-text-header">
                <div className="gradient-text-Hotline">
                ГОРЯЧАЯ ЛИНИЯ
                </div>
                <div className="mb-2 text-Secondary underlined-text">
                    
                    <p className="mt-0 mb-0">+375 152 72-13-45</p>
                    <p className="mb-0">+375 152 39-83-44</p>
                    <p className="mb-0">+375 152 39-83-62</p>
                    
                    </div>
                </Col>
                <Col className="col-md-1 col-lg-1 block-Standart col-icon-header">
                 <img src={WorkHours} alt="Часы работы" className="ms-2"/>
                </Col>
                <Col className="col-md-3 col-lg-3 col-text-header">
                    <div className="gradient-text-Hotline">
                        ЧАСЫ РАБОТЫ
                    </div>
                <div className="mb-2 text-Secondary">
                        <p className="mt-0 mb-0">Приёмное отделение -</p>
                        <p style = {{height:'19px'}}>круглосуточно</p>
                    </div>
                </Col>
                <Col className="col-md-1 col-lg-1 block-Standart col-icon-header">
                    <img src={Place} alt="Местонахождение" className="ms-2"/>
                </Col>
                <Col className="col-md-3 col-lg-3 col-text-header">
                    <div className="gradient-text-Hotline">
                        МЕСТОНАХОЖДЕНИE
                    </div>
                    <div className="text-Secondary">
                        <p className="mt-0 mb-0">Республика Беларусь, г. Гродно</p>
                        <p>ул. Обухова 15</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <NavBar />

        <section id="Running_String">
            <div className="running-String mt-3" />
                <div>
                    <Marquee style={{fontSize:'18px', color:'#FF0000', fontWeight:'600', opacity:'70%', width:'100vw'}}>        
                    {line.lin.map(item => item.text).join(' /// ')}   
                    </Marquee>
                </div>               
            <div className='running-String' style={{marginBottom: '10px'}} />
        </section>

        <section id='Title'>
            <Container className="mt-4">
                <Row xs={1}>
                    <Col className="col-md-12 col-lg-8">
                        <div className="title-Text" style={{maxWidth:'870px'}}>
                        Lorem ipsum dolor sit amet consectetur. Vel sodales sed viverra diam tincidunt. Amet blandit auctor scelerisque semper nunc. Tristique tempus nulla tincidunt et cursus vitae. Vulputate pellentesque risus sed urna. Duis orci enim in augue tellus quam fusce enim. Orci purus mus risus nulla quis non nunc in ac. Sed est vitae volutpat laoreet elit. Elit at ac eu nec non adipiscing ac. Mattis faucibus viverra tristique nunc cursus elit.
                        </div>
                        <div className="title-Text" style={{maxWidth:'870px'}}>
                        Lorem ipsum dolor sit amet consectetur. Vel sodales sed viverra diam tincidunt. Amet blandit auctor scelerisque semper nunc. Tristique tempus nulla tincidunt et cursus vitae. Vulputate pellentesque risus sed urna. Duis orci enim in augue tellus quam fusce enim. Orci purus mus risus nulla quis non nunc in ac. Sed est vitae volutpat laoreet elit. Elit at ac eu nec non adipiscing ac. </div>
                    </Col>
                    <Col className="col-md-12 col-lg-4">
                        <Card style={{border:'none'}}>
                        <Card.Img src={Building} style={{width:'100%'}}alt='Здание'/>
                        <div className="image-Deco">
                            <div className="flex-wrap block-Standart">
                                    <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                                </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="section-Divider"/>
        </section>

       <section id="News">
            <div className="display-2">
                    Новости
                </div>
                <div className="caption-Display">
                    Актуальные новости и события учреждения
                </div>
                <NewsCards/>
            <div className="section-Divider"/>
    </section>

        <section id="Humanitarian-projects" >
                <div className="justify-content-center" style ={{display:'flex'}}>
                    <img src={HumProd} alt="Гуманитарные Проекты" className="humanitarian-Projects"/>
                </div>
                <p className="justify-content-center display-2 mt-3 humanitarian-Projects" style ={{display:'flex'}}>
                    Примите участие в гуманитарных проектах
                </p>
            <div className="section-Divider"/>
        </section> 

        <section id = "Popular-Services">
            <div className="display-2">
                Популярные услуги
            </div>
            <div className="caption-Display">
                Платные услуги оказываемые населению в учреждении здравоохранения
            </div>
            <PopularServices/>
            <div className="section-Divider" style={{transform:'translateY(30px)'}}/>
        </section>  

        <section id = "Sexological-Help">
            <p className="display-2 sexological-Help" style={{textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px'}}>
                Оказание сексологической помощи
            </p>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id = "Helpline">
            <p className="display-2">Телефон доверия</p>
            <Container className="block-Standart" >
                <Row xs={1} className='row-helpline block-Standart' style={{width:'70vw'}}>
                    <Col className="col-md-1 col-lg-4 mt-3 col-icon-helpline block-Standart">
                        <img src={helpline} alt='телефон доверия'/>
                    </Col>
                    <Col className="col-md-11 col-lg-8 mt-3 title-Text-2">
                        Каждый человек может столкнуться с ситуацией, которая выбивает из привычного ритма, кажется непереносимой и неразрешимой.
                        В подобных ситуациях народная мудрость советует найти сопереживающего собеседника и «излить ему душу».
                        Такой собеседник теперь есть!

                    <p className="body-Bold-Gradient mt-4">
                        Служба дистанционной психологической помощи "Телефон доверия" оказывает круглосуточную бесплатную анонимную психологическую помощь людям и их семьям, пострадавшим от насилия.
                    </p>
                    </Col>
                </Row>
            </Container>
            <p className="body-Bold-Gradient-2 justify-content-center" style={{display:"flex"}}>
                Если у вас:
            </p>
            <Container style={{maxWidth:'70vw'}} className="justify-content-center mt-4">
                <Row xs={1} className="g-5">
                    <Col className="col-md-4 col-lg-4">
                        <div style={{display:'flex'}}>
                            <img src={CheckMark} alt="Галочка" className="mb-auto" style={{transform:'translateX(-20px)'}} />
                                <p className="body-Regular mb-auto" style={{color:'#3D9378'}}>
                                    Нарастает чувство одиночества, ощущение «тупика» в жизни, апатия
                                </p>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-lg-4">
                        <div style={{display:'flex'}}>
                            <img src={CheckMark} alt="Галочка" className="mb-auto" style={{transform:'translateX(-20px)'}} />
                                <p className="body-Regular mb-auto" style={{color:'#3D9378'}}>
                                    Возникли проблемы и конфликты в личной жизни, на работе, во взаимоотношениях с окружающими
                                </p>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-lg-4">
                        <div style={{display:'flex'}}>
                            <img src={CheckMark} alt="Галочка" className="mb-auto" style={{transform:'translateX(-20px)'}} />
                                <p className="body-Regular mb-auto" style={{color:'#3D9378'}}>
                                    Нарушается сон, аппетит
                                </p>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} className="g-5 mt-5">
                    <Col className="col-md-4 col-lg-4">
                        <div style={{display:'flex'}}>
                            <img src={CheckMark} alt="Галочка" className="mb-auto" style={{transform:'translateX(-20px)'}} />
                                <p className="body-Regular mb-auto" style={{color:'#3D9378'}}>
                                    Появляются мысли о бесперспективности жизни
                                </p>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-lg-4">
                        <div style={{display:'flex'}}>
                            <img src={CheckMark} alt="Галочка" className="mb-auto" style={{transform:'translateX(-20px)'}} />
                                <p className="body-Regular mb-auto" style={{color:'#3D9378'}}>
                                    Нет желания либо возможности обсудить возникающие проблемы с близкими вам людьми
                                </p>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-lg-4">
                        <div style={{display:'flex'}}>
                            <img src={CheckMark} alt="Галочка" className="mb-auto" style={{transform:'translateX(-20px)'}} />
                                <p className="body-Regular mb-auto" style={{color:'#3D9378'}}>
                                    Просто возникло желание с кем – нибудь пообщаться
                                </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p className="title-Text-2 mt-4" style={{textAlign:'center'}}>
                Звоните по телефону доверия - 170
            </p>
            <Container  className='container-icon-media-helpline' style={{maxWidth:'40vw', marginTop:'40px'}}>
                <Row xs={3} className="block-Standart g-5">
                    <Col className="col-md-4 col-lg-4 block-Standart">
                        <img src={VKicon} alt=""  className="icons"/>
                    </Col>
                    <Col className="col-md-4 col-lg-4 block-Standart">
                        <img src={SkypeIcon} alt="" className="icons"/>
                    </Col>
                    <Col className="col-md-4 col-lg-4 block-Standart">
                        <img src={MailIcon} alt="" className="icons"/>
                    </Col>
                </Row>
            </Container>
            <p className="title-Text-2 mt-5 helpline-Other" style={{textAlign:'center',  textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px'}}>
                Номера “Телефона доверия” в других областях
            </p>
            <div className="section-Divider mb-3"/>
        </section>

        <section id="Our-Partners">
            <div className="block-Standart display-2">
                Наши партнёры
            </div>
            <div className="block-Standart caption-Display">
                Lorem ipsum dolor sit amet consectetur. Magna pulvinar rutrum posuere elit sed.
            </div>
            <Partners/>
            <div className="section-Divider mb-3"/>
        </section>

        <section id="Our-Gallery">
            <div className="block-Standart display-2">
                Наша галлерея
            </div>
            <Gallery/>
        </section> 
        <Footer/> 
        </>
    );
});

export default MainPage;