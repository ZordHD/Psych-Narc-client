import React, { useState, useContext, useEffect } from 'react';
import { Context } from '..';
import { Pagination, Card, CardGroup, Container, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../styles/utility-styles.css';
import '../styles/text-styles.css'
import '../styles/media.css'
import { observer } from 'mobx-react-lite';
import { fetchDepartments } from '../http/departmentsAPI';

const Departments = observer(() => {
  const { departments } = useContext(Context);
  const [selectedDep, setSelectedDep] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchDepartments().then(data => {
      departments.setDeps(data);
      departments.setTotalCount(data);
    });
  }, [departments]);

  let firstDeps = departments.deps.slice(0, 3)
  let lastDeps = departments.deps.slice(3)

  const handleDepClick = (departments) => {
    setSelectedDep(departments);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
    <Container>
      <Row xs={1} md={3} lg={3} сlassName="mt-5">
      {firstDeps.map((departmentsItem, index) => (
          <Col key={index} className='g-5'>
            <Card 
              className='card-Deps' 
              style={{backgroundColor:'#F4F5F6', borderColor:'#3D9378', borderWidth:'0.5px', position:'relative'}}>
              <Card.Img
                className='card-img-deps-top'  
                variant="top" 
                src={process.env.REACT_APP_API_URL + departmentsItem.image}
                style={{marginBottom:'-10px'}} />
              <Card.Body style={{display:'flex', flexDirection:'column'}}>
                <Card.Title 
                  className='caption-Gradient' 
                  style={{textAlign:'center', marginBottom:'4px'}}>
                    {departmentsItem.name} 
                </Card.Title>
                <div className='div-Card mt-2 mb-2' style={{display:'flex', justifyContent: 'center'}}/>
                <Card.Text className='body-Small-Text' style={{color:'#3D9378'}}>
                    {departmentsItem.text}
                </Card.Text>
                <Button 
                  className='button-3 mt-auto' 
                  style={{ border: 'none', alignSelf:'center'}}
                  onClick={() => handleDepClick(departmentsItem)}>
                    Подробнее
                </Button>
              </Card.Body>
            </Card>
          </Col>
      ))}
     </Row>
     <Row xs={1} md={2} lg={2} сlassName="mt-5" style={{paddingLeft:'17%', paddingRight:'17%'}}>
      {lastDeps.map((departmentsItem, index) => (
          <Col key={index} className='mt-5 g-5 block-Standart'>
            <Card 
              className='card-Deps gx-5' 
              style={{backgroundColor:'#F4F5F6', borderColor:'#3D9378', borderWidth:'0.5px', position:'relative'}}>
              <Card.Img
                className='card-img-deps-top' 
                variant="top" 
                src={process.env.REACT_APP_API_URL + departmentsItem.image}
                style={{marginBottom:'-10px'}} />
              <Card.Body style={{display:'flex', flexDirection:'column'}}>
                <Card.Title 
                  className='caption-Gradient' 
                  style={{textAlign:'center', marginBottom:'4px'}}>
                    {departmentsItem.name} 
                </Card.Title>
                <div className='div-Card mt-2 mb-2' style={{display:'flex', justifyContent: 'center'}}/>
                <Card.Text className='body-Small-Text' style={{color:'#3D9378'}}>
                    {departmentsItem.text}
                </Card.Text>
                <Button 
                  className='button-3 mt-auto' 
                  style={{ border: 'none', alignSelf:'center'}}
                  onClick={() => handleDepClick(departmentsItem)}>
                    Подробнее
                </Button>
              </Card.Body>
            </Card>
          </Col>
      ))}
     </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}> 
        <img 
          src={process.env.REACT_APP_API_URL + selectedDep?.image}
          alt='Отделение'
          style={{objectFit:'cover'}}/>
        <Modal.Header>
          <Modal.Title className='title-Text-2'>{selectedDep?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body-Regular' style={{color:'rgb(61, 147, 120)'}}>
          <p>{selectedDep?.fulltext}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className='button-3' onClick={handleCloseModal} style={{border:'none'}}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
})

export default Departments;