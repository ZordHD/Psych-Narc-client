import React, { useState, useContext, useEffect } from 'react';
import { Context } from '..';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../styles/utility-styles.css'
import '../styles/text-styles.css'
import '../styles/images-styles.css'
import { observer } from "mobx-react-lite";
import { fetchVacancies } from '../http/vacanciesAPI';



const Vacancie = observer(() => {
    const { vacancies } = useContext(Context)

    useEffect(() => {
        fetchVacancies().then(data => {
          vacancies.setVacs(data);
          vacancies.setTotalCount(data);
        });
      }, [vacancies]);

    return (
        <div>
             <Container className="mt-5" style={{width:'80vw'}}>
             {vacancies.vacs.map((vacanciesItem, index) => (
                <Row key = {index} xs={1} className='mt-5'>
                    <Col className="col-md-4 col-lg-4">
                        <Card style={{border:'none', height:'100%', width:'100%'}}>
                        <Card.Img 
                            variant="top" 
                            src={process.env.REACT_APP_API_URL + vacanciesItem.image} 
                            style={{width:'100%', height:'100%'}}
                            alt='Вакансия'/>
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
                    <Col className="col-md-7 col-lg-7">
                        <div className="display-2" style={{textAlign:'left'}}>
                            {vacanciesItem.name}
                        </div>
                        <div className="body-Title-Bold mt-3" style={{textAlign:'left', color:'#3D9378'}}>
                            {vacanciesItem.price}
                        </div>
                        <div className="body-Regular mt-3" style={{color:'#4BB594'}}>
                            {vacanciesItem.text}     
                        </div>
                    </Col>
                    <div className="section-Divider-Container mt-5 mb-4"/>
                </Row>
                ))}
            </Container>
            
        </div>
    );
});

export default Vacancie;