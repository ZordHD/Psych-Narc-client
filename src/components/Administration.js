import React, { useContext, useState, useEffect } from 'react';
import { Pagination, Card, Container } from 'react-bootstrap';
import administration from '../assets/administration.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/utility-styles.css';
import '../styles/text-styles.css'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchAdministrators } from '../http/administratorsAPI';

const Administration = observer(() => {
  const {administrators} = useContext(Context)
  const pages = []

  useEffect(() => {
    fetchAdministrators(administrators.page, administrators.limit).then(data => {
      administrators.setAdmins(data.rows);
      administrators.setTotalCount(data.count);
    });
  }, [administrators.page,administrators.limit]);

  const totalPages = Math.ceil(administrators.totalCount / administrators.limit);

  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1)
  }

  const handlePageChange = (pageNumber) => {
    administrators.setPage(pageNumber);
  };

  return (
    <div>
    <Container className='block-Standart'>
    <Pagination style={{marginTop:'60px'}}>
          <Pagination.Prev 
            disabled={administrators.page === 1} 
            onClick={() => handlePageChange(administrators.page - 1)} />
          </Pagination>
      <Row  xs ={1} сlassName="mt-5 block-Standart" style={{width:'65vw'}}>
        {administrators.admins.map((administratorsItem, index) => (
          <Col key={index} className='g-5 col-md-4 col-lg-4'>
            <Card className='card-Administration' style={{border:'none'}}>
              <Card.Img 
                variant="top"
                className='card-img-admins-top' 
                src={process.env.REACT_APP_API_URL + administratorsItem.image} 
                style={{marginBottom:'-10px', maxWidth:'100%'}} />
              <Card.Body style={{height:'20%'}}>
                <Card.Title className='caption-sm mt-1' style={{textAlign:'center'}}>
                  {administratorsItem.name}
                </Card.Title>
                    <div className='div-Card-Administration block-Standart'/>
                <Card.Text className='body-Semibold block-Standart' style={{color:'white'}}>
                    {administratorsItem.text}                   
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination style={{marginTop:'60px'}}>
         <Pagination.Next 
            disabled={administrators.page === totalPages} 
            onClick={() => handlePageChange(administrators.page + 1)} />
        </Pagination>
      </Container>
      <Pagination className='mt-5 block-Standart'>
          <div className='block-Standart'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={administrators.page === page}
                    onClick={() => administrators.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
             </div>
      </Pagination>
    </div>
  );
})

export default Administration;