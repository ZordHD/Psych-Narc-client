import React, {useContext, useState} from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Emblem2 from '../assets/Emblem2.png';
import Logo2 from '../assets/Logo2.png';
import Building2 from '../assets/Building2.png'
import '../styles/gradient.css'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import { MAINPAGE_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login } from "../http/userAPI";
import { Context } from "..";
import { observer } from "mobx-react-lite";


const Login = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try{
            let data;
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAINPAGE_ROUTE)
            console.log(data)
        }
       catch (e){
            alert(e.response.data.message)
       }
    }
    return (
        <Container fluid style={{width:'100vw', paddingLeft:'0', paddingRight:'0'}}>
            <Row xs={1}>
                <Col className="col-md-6 col-lg-6">
                    <div className="gradient-Login" style={{maxHeight:'100vw'}}> 
                        <div style={{display:'inline-flex'}}>
                            <img src={Emblem2} alt="Национальная эмблема" style={{ marginLeft: '40px', marginTop:'20px'}}/>
                            <NavLink to={MAINPAGE_ROUTE}>
                                <img src={Logo2} alt="Логотип" style={{paddingLeft: '40px', marginTop:'20px'}}/>
                            </NavLink>
                        </div>
                            <div style={{fontSize:'30px', color:'white', paddingTop:'20%', paddingLeft:'4%'}}>
                                Учреждение Здравоохранения
                                <div style={{fontWeight:'700', paddingTop:'30px', paddingBottom:'30px'}}>”Психиатрия - наркология”</div>
                                Гродненский областной клинический центр
                            </div>
                            <div className="block-Standart" style={{paddingTop:'10%', paddingBottom:'10%'}}>
                                <img src={Building2} style={{width:'45%'}}/>
                            </div>
                    </div>
                </Col>
                <Col className="col-md-6 col-lg-6">
                    <div style={{paddingTop:'30%', fontSize:'34px', width:'80%', paddingLeft:'19.5%', color:'#1f674f', fontWeight:'600'}}>
                        С возвращением!
                    </div>
                    <div className="caption" style={{color:'#3D9378', width:'80%', paddingLeft:'20%'}}>
                        Войдите в свой аккаунт
                    </div>
                    <Form style={{paddingLeft:'20%'}}>
                    <Form.Group controlId="formLogEmail">
                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>E-mail</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Введите ваш e-mail" 
                            style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%'}}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogPassword" className="mt-4">
                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Пароль</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Введите ваш пароль" 
                            style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%', borderColor:'#4BB594'}}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    </Form.Group>
                    </Form>

                    <div style={{display:'flex', justifyContent:'space-between', width:'70%', marginLeft:'20%', height:'25px'}}>
                    <Form className="mt-2" style={{}}>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`Запомнить меня`}
                                className="body-Regular"
                                style={{color:'#1F674F', border:'none'}}
                            />
                            </div>
                        ))}
                    </Form>
                        <div className="body-Smallest-Text mt-1" style={{color:'#4BB594', cursor:'pointer', marginRight:'20%'}}>
                            Забыли пароль?
                        </div>
                    </div>
                

                    <div style={{display:'flex', height:'80px', justifyContent:'center'}}>
                        <Button 
                            className='button-3 mt-4' 
                            style={{border:'none', width:'60%', fontSize:'16px', fontWeight:'700', marginRight:'3%'}}
                            onClick={signIn}>
                            Войти
                        </Button>
                    </div>

                    <div className="body-Small-Text block-Standart mt-3" style={{marginRight:'4%'}}>
                        <span style={{color:'#1F674F'}}>У вас ещё нет аккаунта?</span><NavLink to={REGISTRATION_ROUTE} style={{color:'#4BB594', paddingLeft:'5px'}}>Зарегистрируйтесь
                        </NavLink>
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default Login;