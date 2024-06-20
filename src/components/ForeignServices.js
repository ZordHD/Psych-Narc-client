import React, { useEffect, useContext, useState } from 'react';
import { Pagination, Card, CardGroup, Modal, Container } from 'react-bootstrap';
import { Context } from '../index';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../styles/utility-styles.css';
import '../styles/text-styles.css'
import { observer } from 'mobx-react-lite';
import { fetchForeignServices } from '../http/foreignservicesAPI';


const LocalServices = observer(() => {
  const { foreignservices } = useContext(Context);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchForeignServices(foreignservices.page, foreignservices.limit).then(data => {
      foreignservices.setForeignServices(data.rows);
      foreignservices.setTotalCount(data.count);
    });
  }, [foreignservices.page, foreignservices.limit]);

  const totalPages = Math.ceil(foreignservices.totalCount / foreignservices.limit);

  const handlePageChange = (pageNumber) => {
    foreignservices.setPage(pageNumber);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
    <Container className='block-Standart mt-3' style={{width:'100vw'}}>
    <Pagination style={{marginRight:'20px'}}>
          <Pagination.Prev 
            disabled={foreignservices.page === 1} 
            onClick={() => handlePageChange(foreignservices.page - 1)} />
        </Pagination>
      <Row  xs ={1} сlassName="mt-5 justify-content-center" style={{width:'100%'}}>
        {foreignservices.foreignserv.map(item => (
          <Col key={item.id} className='col-md-6 col-lg-3 g-3'>
            <Card className='card-HallOfFame' style={{border:'none'}}>
              <Card.Img 
                variant="top" 
                src={process.env.REACT_APP_API_URL + item.image} 
                style={{ marginBottom:'-7px'}} />
              <Card.Body style={{display:'flex', flexDirection:'column'}}>
                <Card.Title 
                  className='body-Semibold' 
                  style={{color:'white',  marginBottom:'4px', textAlign:'center'}}> 
                  {item.name}
                </Card.Title>
                <div className='div-Card-Administration block-Standart'/>
                <Card.Text className='body-Smallest-Text mt-2' style={{color:'white'}}>
                  {item.text}             
                </Card.Text>
                <Button className='button-2 ms-auto' style={{ border: 'none', display: 'flex', marginTop: 'auto' }} onClick={() => handleServiceClick(item)}>
                        Подробнее
                    </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination style={{marginLeft:'20px'}}>
          <Pagination.Next 
            disabled={foreignservices.page === totalPages} 
            onClick={() => handlePageChange(foreignservices.page + 1)} />
        </Pagination>
      </Container>
      <Pagination className='mt-5 block-Standart'>
        <div className='block-Standart'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page =>
            <Pagination.Item
              key={page}
              active={foreignservices.page === page}
              onClick={() => foreignservices.setPage(page)}
            >
              {page}
            </Pagination.Item>
          )}
        </div>
      </Pagination>

      <Modal show={showModal} onHide={handleCloseModal}> 
        <img 
          src={process.env.REACT_APP_API_URL + selectedService?.image}
          alt='Услуга'
          style={{objectFit:'cover'}}/>
        <Modal.Header>
          <Modal.Title className='title-Text-2'>{selectedService?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body-Regular' style={{color:'rgb(61, 147, 120)'}}>
          <p>{selectedService?.fulltext}</p>
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

export default LocalServices;