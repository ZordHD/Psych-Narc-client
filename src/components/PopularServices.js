import React, { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination, Modal } from 'react-bootstrap';
import { fetchServices } from '../http/servicesAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const PopularServices = observer(() => {
  const { services } = useContext(Context)
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const pages = []

  useEffect(() => {
    fetchServices(services.page, services.limit).then(data => {
      services.setServ(data.rows);
      services.setTotalCount(data.count);
    });
  }, [services.page, services.limit]);

  const totalPages = Math.ceil(services.totalCount / services.limit);

  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1)
  }

  const handlePageChange = (pageNumber) => {
    services.setPage(pageNumber);
  };

  const handleServiceClick = (services) => {
    setSelectedService(services);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Container className='block-Standart'>
        <Pagination className='mt-5' style={{marginRight:'20px'}}>
          <Pagination.Prev  
            disabled={services.page === 1} 
            onClick={() => handlePageChange(services.page - 1)} />
          </Pagination>
        <Row xs={1} md={1} className="mt-5" style={{width:'100vw'}}>
          {services.serv.map((servicesItem, index) => (
             <Col key={index} className='col-lg-4 g-5'>
             <Card className='card-Popular-Services' style={{border:'none'}}>
               <Card.Img 
                variant="top" 
                className='card-img-popServ-top' 
                src={process.env.REACT_APP_API_URL + servicesItem.image} 
                style={{marginBottom:'-10px'}}
                />
               <Card.Body style={{display:'flex', flexDirection:'column'}} >
                  <Card.Title 
                    className='caption mb-3 mt-3' 
                    style={{textAlign:'center', marginBottom:'4px'}}>
                     {servicesItem.name}
                  </Card.Title>
                     <div className='div-Card-2' style={{display:'flex', justifyContent: 'center'}}/>
                  <Card.Text 
                    className='body-Regular mt-3' 
                    style={{color:'white'}}>
                     {servicesItem.text}                   
                  </Card.Text>
                     <Button 
                      className='button-2 ms-auto' 
                      style={{border:'none', display:'flex', marginTop:'auto'}}
                      onClick={() => handleServiceClick(servicesItem)}>
                         Подробнее
                     </Button>
               </Card.Body>
             </Card>
           </Col>
          ))}
        </Row>
        <Pagination className='mt-5' style={{marginLeft:'20px'}}>
         <Pagination.Next 
            disabled={services.page === totalPages} 
            onClick={() => handlePageChange(services.page + 1)} />
        </Pagination>
      </Container>
      <Pagination className='mt-5 block-Standart'>
        <div className='block-Standart' style={{marginLeft:'120px'}}>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={services.page === page}
                    onClick={() => services.setPage(page)}
                    
                >
                  {page}
                </Pagination.Item>
            )}
            </div>
        <div className='div-more-services'>
          <Button className='button-3' style={{ border: 'none' }}>
            Больше услуг
          </Button>
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
});

export default PopularServices;