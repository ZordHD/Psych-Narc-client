import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from "react-router-dom";
import Emblem from '../assets/Emblem.png';
import Logo from '../assets/Logo.png';
import search from '../assets/search.svg';
import PersAcc from '../assets/PersAcc.svg';
import Eye from '../assets/Eye.svg';
import Localization from '../assets/localization.png';
import '../styles/gradient.css';
import '../styles/images-styles.css';
import { MAINPAGE_ROUTE, LOGIN_ROUTE, APPEALS_ROUTE, CONTACTS_ROUTE, PERSONALACCOUNT_ROUTE, SERVICES_ROUTE, STRUCTURE_ROUTE, TEAMNEWS_ROUTE, VACANCIES_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { NavbarCollapse } from "react-bootstrap";






const NavBar= observer(() => {
  const {user} = useContext(Context)
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      setIsOpen(false);
      console.log('Resize event, isOpen:', isOpen);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);
  
  const logOut = () => {
    localStorage.removeItem('token')
    user.setUser({})
    user.setIsAuth(false)
  }

    return (
      <Navbar className="gradient-NavBar" style={{height:'76px', width:"100vw"}} expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img src={Emblem} alt="Национальная эмблема" style={{ marginLeft: '20px'}}/>
            <img src={Logo} alt="Логотип" style={{paddingLeft: '20px'}}/>
          </Navbar.Brand>
            {isMobile ? (
              <>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {setIsOpen(!isOpen); console.log('Toggle clicked, isOpen:', !isOpen)}} style={{ backgroundColor: 'white', color:'#3D9378', borderWidth:'1px' }} />
          <Navbar.Collapse id="responsive-navbar-nav" className={`navbar-menu ${isOpen ? 'open' : ''}`} style={{flexGrow:'1', display:'flex', borderColor:'#3D9378', borderWidth:'10px'}}>
            {isOpen && (
              <>
            <NavLink to={MAINPAGE_ROUTE} className="body-Bold" style={({isActive}) => ({color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none'})}>Главная</NavLink>
            <NavLink to={STRUCTURE_ROUTE} className="body-Semibold" style={({isActive}) => ({color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none'})}>Структура</NavLink>
            <NavLink to={TEAMNEWS_ROUTE} className="body-Semibold" style={({isActive}) => ({color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none'})}>Новости коллектива</NavLink>
            <NavLink to={VACANCIES_ROUTE} className="body-Semibold" style={({isActive}) => ({color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none'})}>Вакансии</NavLink>
            <NavLink to={SERVICES_ROUTE} className="body-Semibold" style={({isActive}) => ({color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none'})}>Услуги</NavLink>
            <NavLink to={APPEALS_ROUTE} className="body-Semibold" style={({isActive}) => ({color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none'})}>Обращения граждан</NavLink>
            <NavLink to={CONTACTS_ROUTE} className="body-Semibold" style={({isActive}) => ({color: isActive ? '#00FFAF' : '#3D9378',textDecoration: 'none'})}>Контакты</NavLink>
            <NavLink to="/search" className="body-Semibold" style={({ isActive }) => ({ color: isActive ? '#00FFAF' : '#3D9378',textDecoration: 'none' })}>Поиск</NavLink>
                <NavLink to="/eye" className="body-Semibold" style={({ isActive }) => ({ color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none' })}>Режим для слабовидящих</NavLink>
                <NavLink to="/localization" className="body-Semibold" style={({ isActive }) => ({ color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none' })}>Язык</NavLink>
               
                {user.isAuth ? (
                  <>
                    <NavLink to={PERSONALACCOUNT_ROUTE} className="body-Semibold" style={({ isActive }) => ({ color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none' })}>Аккаунт</NavLink>
                    <NavDropdown className='custom-dropdown' style={{ width: '36px', height: '26px', marginBottom: '7px' }}>
                      <NavDropdown.Item onClick={() => logOut()} eventKey="1" drop='start' style={{ marginRight: '30px' }}>
                        Выйти
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <NavLink to={LOGIN_ROUTE} className="body-Semibold" style={({ isActive }) => ({ color: isActive ? '#00FFAF' : '#3D9378', textDecoration: 'none' })}>Войти</NavLink>
                )}
              </>
            )}
                </Navbar.Collapse>
              </>
              
          
              
              
            ) : (
              <>
            <div className="lineDiv" style={{marginLeft: '10px'}}/>
            <NavLink to={MAINPAGE_ROUTE} className="body-Bold text-nav" style={({isActive}) => ({color: isActive ? '#00FFAF' : 'white', textDecoration: 'none'})}>Главная</NavLink>
            <NavLink to={STRUCTURE_ROUTE} className="body-Semibold text-nav" style={({isActive}) => ({color: isActive ? '#00FFAF' : 'white', textDecoration: 'none'})}>Структура</NavLink>
            <NavLink to={TEAMNEWS_ROUTE} className="body-Semibold text-nav" style={({isActive}) => ({color: isActive ? '#00FFAF' : 'white', textDecoration: 'none', whiteSpace:'nowrap'})}>Новости коллектива</NavLink>
            <NavLink to={VACANCIES_ROUTE} className="body-Semibold text-nav" style={({isActive}) => ({color: isActive ? '#00FFAF' : 'white', textDecoration: 'none'})}>Вакансии</NavLink>
            <NavLink to={SERVICES_ROUTE} className="body-Semibold text-nav" style={({isActive}) => ({color: isActive ? '#00FFAF' : 'white', textDecoration: 'none'})}>Услуги</NavLink>
            <NavLink to={APPEALS_ROUTE} className="body-Semibold text-nav" style={({isActive}) => ({color: isActive ? '#00FFAF' : 'white', textDecoration: 'none', whiteSpace:'nowrap'})}>Обращения граждан</NavLink>
            <NavLink to={CONTACTS_ROUTE} className="body-Semibold text-nav" style={({isActive}) => ({color: isActive ? '#00FFAF' : 'white', textDecoration: 'none'})}>Контакты</NavLink>
            <div className="lineDiv" style={{marginLeft: '15px'}}></div>
            <Nav>
              <img src={search} className='navbar-icon' alt="Поиск" style={{cursor: 'pointer', marginLeft:'15px'}}/>
              <img src={Eye} className='navbar-icon' alt="Режим для слабовидящих" style={{cursor: 'pointer', marginLeft:'40px'}}/>
              <img src={Localization} className='navbar-icon' alt="Язык" style={{cursor: 'pointer', marginLeft:'40px', maxHeight:'35px'}}/>
              <NavDropdown id="dropdown" className="custom-dropdown" style={{width:'26px', height:'26px', marginBottom:'7px'}}/>
              {user.isAuth ?
            <Nav> 
              <NavLink to={PERSONALACCOUNT_ROUTE}>
                <img src={PersAcc} alt="Аккаунт" style={{marginLeft:'20px'}}/>
              </NavLink>
              <NavDropdown className='custom-dropdown' style={{width:'36px', height:'26px', marginBottom:'7px'}}>

                <NavDropdown.Item 
                  onClick={() => logOut()} 
                  eventKey="1"
                  drop='start'
                  style={{marginRight:'30px'}}
                  >
                    Выйти
                  
                </NavDropdown.Item>
              </NavDropdown>
              </Nav>
              :
              <NavLink to={LOGIN_ROUTE}>
                <img src={PersAcc} alt="Аккаунт" style={{cursor: 'pointer', marginLeft:'20px', paddingRight:'20px'}}/>
              </NavLink>
              }
            </Nav>
           </>
            )}
        </Container>
      </Navbar>
    );
});

export default NavBar;