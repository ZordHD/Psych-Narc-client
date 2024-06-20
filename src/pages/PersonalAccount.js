import React, { useContext, useState } from "react";
import '../styles/utility-styles.css'
import '../styles/text-styles.css'
import { Col, Container, Row, Form, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfilePicture from '../assets/ProfilePicture.svg'
import CloseButton from '../assets/CloseButton.svg'
import IconProf from '../assets/IconProf.svg'
import { updateUser } from "../http/userAPI";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const PersonalAccount = observer(() => {

        const { user } = useContext(Context);
        const [email, setEmail] = useState(user.email);
        const [name, setName] = useState(user.name);
        const [surname, setSurname] = useState(user.surname);
        const [phone_num, setPhone] = useState(user.phone_num);
        
        const updateUserInfo = async () => {
          const updatedUserData = {
            email,
            name,
            surname,
            phone_num
          };
        
          try {
            const updatedUser = await updateUser(user.user.id, updatedUserData);
            user.setUser(updatedUser);
            alert('Данные успешно изменены!')
          } catch (error) {
            alert('Ошибка при обновлении пользователя:', error);
          }
        };
    

    return (
        <>
        <NavBar/>
            <Container style={{width:'60vw'}}>
                    <div className='block-Standart' style={{marginTop:'10%', justifyContent:'space-between'}}>
                        <div className="display-1">
                        Личный кабинет
                        </div>
                        <div>
                        <Button className='button-3 mt-2' onClick={updateUserInfo} style={{border:'none', minWidth:'15%', fontSize:'16px', minHeight:'47px', fontWeight:'700'}}>
                            Сохранить изменения
                        </Button>
                        </div>
                    </div>
                    <div className="body-Bold" style={{color:'#1F674F',marginTop:'70px'}}>
                        Информация
                    </div>
                    <Container>
                        <Row xs={1} md={1} lg={2} className="mt-5">
                            <Col>
                                <Form >
                                    <Form.Group controlId="formFirstName">
                                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Имя*</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ваше имя" 
                                            style={{height:'50px', width:'100%', borderRadius:'15px 15px 15px 15px', borderWidth:'3px'}}
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group controlId="formLastName">
                                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Фамилия</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ваша фамилия" 
                                            style={{height:'50px', width:'100%', borderRadius:'15px 15px 15px 15px', borderWidth:'3px'}}
                                            value={surname}
                                            onChange={e => setSurname(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row xs={1} md={1} lg={2} className="mt-5">
                            <Col>
                                <Form >
                                    <Form.Group controlId="formEmail">
                                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>email*</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ваш email" 
                                            style={{height:'50px', width:'100%', borderRadius:'15px 15px 15px 15px', borderWidth:'3px'}}
                                            value={email}
                                            onChange={e => setEmail(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group controlId="formPhone">
                                        <Form.Label className="body-Regular" style={{color:'#3D9378'}}>Телефон</Form.Label>
                                        <Form.Control 
                                            type="tel" 
                                            placeholder="Ваш номер телефона" 
                                            style={{height:'50px', width:'100%', borderRadius:'15px 15px 15px 15px', borderWidth:'3px'}}
                                            value={phone_num}
                                            onChange={e => setPhone(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    <div className='block-Standart' style={{marginTop:'50px', justifyContent:'space-between'}}>
                        <div className="caption" style={{color:'#3D9378'}}>
                            Пароль
                        </div>
                        <div>
                        <Button className='button-3 mt-2' style={{border:'none', minWidth:'15%', fontSize:'16px', minHeight:'30px', fontWeight:'700'}}>
                            Обновить пароль
                        </Button>
                        </div>
                    </div>
                    <div className="body-Small-Text" style={{color:'#3D9378'}}>
                            Последнее обновление 1 месяц назад
                    </div>
                    <div  className='mt-5' style={{display:'flex', flexDirection:'row'}}>
                        <img src= {ProfilePicture}/>
                        <Button 
                            className='button-3' 
                            style={{border:'none', height:'55px', width:'200px', fontSize:'16px', fontWeight:'700', marginLeft:'4%', marginTop:'2.3%'}}>
                            Update profile
                        </Button>
                        <img src = {CloseButton} style={{marginLeft:'8%'}} />
                        <div className="body-Small-Text gradient-text" style={{marginTop:'40px', marginLeft:'2%'}}>
                            Clear all
                        </div>
                    </div>
                    <Card
                        className="card-acc-info mt-5"
                        style={{borderRadius:'10px 10px 10px 10px', borderColor:'#3D9378', borderWidth:'1px'}}>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'50px', justifyContent:'space-between', marginLeft:'5.5%',  marginRight:'5.5%'}}>
                            <div style={{fontWeight:'700', color:'#3D9378'}}>
                                <img src={IconProf} style={{marginRight:'10px'}} alt=""/>
                                Количество отзывов
                            </div>
                            <div style={{fontWeight:'700', color:'#3D9378', marginLeft:'50%'}}>
                                1
                                [
                                <span className="underlined-text body-Small-Text" style={{fontWeight:'700'}}>
                                Посмотреть все
                                </span>
                                ]
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'10px', justifyContent:'space-between', marginLeft:'5.5%',  marginRight:'5.5%'}}>
                            <div style={{fontWeight:'700', color:'#3D9378'}}>
                                <img src={IconProf} style={{marginRight:'10px'}} alt=""/>
                                Количество благодарностей
                            </div>
                            <div style={{fontWeight:'700', color:'#3D9378', marginLeft:'42%'}}>
                                1
                                [
                                <span className="underlined-text body-Small-Text" style={{fontWeight:'700'}}>
                                Посмотреть все
                                </span>
                                ]
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'10px', justifyContent:'space-between', marginLeft:'5.5%',  marginRight:'5.5%', marginBottom:'6%'}}>
                            <div style={{fontWeight:'700', color:'#3D9378'}}>
                                <img src={IconProf} style={{marginRight:'10px'}} alt=""/>
                                Количество вопросов
                            </div>
                            <div style={{fontWeight:'700', color:'#3D9378', marginLeft:'48.5%'}}>
                                1
                                [
                                <span className="underlined-text body-Small-Text" style={{fontWeight:'700'}}>
                                Посмотреть все
                                </span>
                                ]
                            </div>
                        </div>
                    </Card>
                </Container>
        <Footer/>
        </>
    );
});


export default PersonalAccount;