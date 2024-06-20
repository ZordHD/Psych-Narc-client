import React, { useContext, useState } from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite";
import Button from "react-bootstrap/Button";
import Emblem2 from '../assets/Emblem2.png';
import Logo2 from '../assets/Logo2.png';
import Building2 from '../assets/Building2.png'
import '../styles/gradient.css'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import { LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { registration } from "../http/userAPI";
import { Context } from "..";

const Registration = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone_num, setPhone_num] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const signIn = async (event) => {
        let data;
        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        if(password.length < 8){
            alert('Пароль слишком короткий!');
            return;
        }

        if(!isChecked){
            alert('Согласитесь с условиями пользования!')
            return;
        }

        data = await registration(name, surname, email, phone_num, password)
        user.setUser(user)
        user.setIsAuth(true)
        navigate(MAINPAGE_ROUTE)
    }
    return (
        <Container fluid style={{width:'100vw', paddingLeft:'0', paddingRight:'0'}}>
        <Row xs={1}>
            <Col className="col-md-6 col-lg-6">
                <div className="gradient-Login" style={{Height:'100vw'}}> 
                    <div style={{display:'inline-flex'}}>
                        <img src={Emblem2} alt="Национальная эмблема" style={{ marginLeft: '40px', marginTop:'20px'}}/>
                        <NavLink to={MAINPAGE_ROUTE}>
                            <img src={Logo2} alt="Логотип" style={{paddingLeft: '40px', marginTop:'20px'}}/>
                        </NavLink>
                    </div>
                        <div style={{fontSize:'30px', color:'white', paddingTop:'20%', paddingLeft:'4%'}}>
                            Учреждение Здравоохранения
                            <div style={{fontWeight:'700', paddingTop:'30px', paddingBottom:'60px'}}>”Психиатрия - наркология”</div>
                            Гродненский областной клинический центр
                        </div>
                        <div className="block-Standart" style={{paddingTop:'10%', paddingBottom:'20%'}}>
                            <img src={Building2} style={{width:'45%'}}/>
                        </div>
                </div>
            </Col>
            <Col className="col-md-6 col-lg-6">
                <div style={{marginTop:'10%', fontSize:'34px', width:'80%', paddingLeft:'19.5%', color:'#1f674f', fontWeight:'600'}}>
                    Создайте аккаунт
                </div>
                <Form style={{paddingLeft:'20%'}}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Имя*</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Введите своё имя" 
                            style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%'}}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formSecondName" className="mt-2">
                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Фамилия</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Введите свою фамилию" 
                            style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%'}} 
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-2">
                            <Form.Label className="body-Regular" style={{color:'#3D9378'}}>E-mail*</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Введите ваш e-mail" 
                                style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%'}}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group controlId="formTelephone" className="mt-2">
                            <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Телефон</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Введите ваш телефон" 
                                style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%'}}
                                value={phone_num}
                                onChange={e => setPhone_num(e.target.value)}
                            />

                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mt-2">
                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Пароль</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Введите ваш пароль" 
                            style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%', borderColor:'#4BB594'}}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="body-Smallest-Text" style={{color:'#3D9378'}}>
                        Должно быть не менее 8 символов
                    </div>

                    <Form.Group controlId="formConfirmPassword" className="mt-2">
                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Повторите пароль</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Введите ваш пароль снова" 
                            style={{height:'50px', border:'none', backgroundColor:'#EDF2F7', width:'70%', borderColor:'#4BB594'}}
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    </Form>
                    
                    <div style={{display:'flex', justifyContent:'space-between', width:'70%', height:'25px'}}>
                    <Form className="mt-2" style={{marginLeft:'28.5%', justifyContent:'space-between', display:'flex'}}>
                            <Form.Check
                                type="checkbox"
                                className="body-Regular"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                style={{color:'#1F674F', border:'none'}}
                            />
                        <div className="body-Smallest-Text" style={{paddingLeft:'10px', color:'#3D9378'}}>
                            Создание учетной записи означает ваше согласие с <span style={{color:'#1F674F', fontWeight:'700', cursor:'pointer'}}>Условиями и положениями</span>, а также с нашей <span style={{color:'#1F674F', fontWeight:'700', cursor:'pointer'}}>Политикой конфиденциальности</span>
                        </div>
                    </Form>
                    </div>

                <div style={{display:'flex', height:'80px', justifyContent:'center', marginTop:'20px'}}>
                    <Button 
                        className='button-3 mt-4' 
                        style={{border:'none', width:'60%', fontSize:'16px', fontWeight:'700', marginRight:'3%'}}
                        onClick={signIn}>
                            Создать аккаунт
                    </Button>
                </div>

                <div className="body-Small-Text block-Standart mt-3" style={{marginRight:'4%'}}>
                    <span style={{color:'#1F674F'}}>У вас уже есть аккаунт?</span><NavLink to={LOGIN_ROUTE} style={{color:'#4BB594', paddingLeft:'5px'}}>Войти
                    </NavLink>
                </div>
            </Col>
        </Row>
    </Container>
    );
});

export default Registration;