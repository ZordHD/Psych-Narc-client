import React, { useContext } from "react";
import { Context } from "../http";
import Container from 'react-bootstrap/Container';
import '../styles/utility-styles.css';
import { Col, Row } from "react-bootstrap";
import VKwhiteIcon from '../assets/VKWhiteIcon.svg';
import FacebookIcon from '../assets/FacebookIcon.svg';
import InstagramIcon from '../assets/InstagramIcon.svg';
import OKIcon from '../assets/OKIcon.svg';

const Footer = () => {
    return(
        <div className="footer">
            <div className="block-Standart" style={{fontSize:'24px', fontWeight:'500', color:'white', paddingTop:'10px'}}>
                УЗ “Психиатрия-Наркология”
            </div>
            <Container style={{width:'100vw'}}>
                <Row xs={1} md={4} lg={4} className='g-5' style={{paddingTop:'70px'}}>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Контактная информация
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                            Lorem ipsum dolor sit amet consectetur. Enim sit vivamus sed et sed senectus faucibus. Quis fusce mattis in sit diam in purus.
                        </div>
                    </Col>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Горячая линия
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                            Lorem ipsum dolor sit amet consectetur. Enim sit vivamus sed et sed senectus faucibus. Quis fusce mattis in sit diam in purus.
                        </div>
                    </Col>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Телефоны
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                            Lorem ipsum dolor sit amet consectetur. Enim sit vivamus sed et sed senectus faucibus. Quis fusce mattis in sit diam in purus.
                        </div>
                    </Col>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Email
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                            Lorem ipsum dolor sit amet consectetur. Enim sit vivamus sed et sed senectus faucibus. Quis fusce mattis in sit diam in purus.
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="line-Footer" />
            <div className="block-Standart">
                <div className="me-auto" style={{fontWeight:'400', fontSize:'14px', color:'white', paddingLeft:'37px', opacity:'70%', marginTop:'30px'}}>
                    Copyright © 2020. All rights reserved.
                </div>
                <div style={{paddingRight:'44%', marginTop:'30px'}}>
                    <img src= {OKIcon} alt="" className='icons' style={{marginRight:'20px'}}/>
                    <img src= {VKwhiteIcon} alt="" className='icons' style={{marginRight:'20px'}}/>
                    <img src= {FacebookIcon} alt="" className='icons' style={{marginRight:'20px'}}/>
                    <img src= {InstagramIcon} alt=""  className='icons'style={{marginRight:'20px'}}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;