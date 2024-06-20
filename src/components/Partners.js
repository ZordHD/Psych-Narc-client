import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { fetchPartners } from '../http/partnersAPI';
import '../styles/utility-styles.css'

const Partners = observer(() => {
  const { partners } = useContext(Context)
  const pages = []

  useEffect(() => {
    fetchPartners(partners.page, partners.limit).then(data => {
      partners.setServ(data.rows);
      partners.setTotalCount(data.count);
    });
  }, [partners.page, partners.limit]);

  const totalPages = Math.ceil(partners.totalCount / partners.limit);

  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1)
  }


  const handlePageChange = (pageNumber) => {
    partners.setPage(pageNumber);
  };

  return (
    <div>
      <Container className='block-Standart'>
        <Pagination style={{marginRight:'20px', marginTop:'60px'}}>
          <Pagination.Prev 
            disabled={partners.page === 1} 
            onClick={() => handlePageChange(partners.page - 1)} />
          </Pagination>
        <Row xs={1} md={2} lg={5} className="mt-1" style={{width:'90vw'}}>
          {partners.partner.map((partnersItem, index) => (
             <Col key={index} className='g-5'>
             <Card className='card-Partners'>
               <Card.Img 
                variant="top" 
                className='card-img-partners-top' 
                src={process.env.REACT_APP_API_URL + partnersItem.image} 
                style={{maxWidth:'100%'}}
                />
               <Card.Body>
                  <Card.Title 
                    className='caption-Display mt-3' 
                    style={{textAlign:'center'}}>
                     {partnersItem.name}
                  </Card.Title>
               </Card.Body>
             </Card>
           </Col>
          ))}
        </Row>
        <Pagination style={{marginLeft:'20px', marginTop:'60px'}}>
         <Pagination.Next 
            disabled={partners.page === totalPages} 
            onClick={() => handlePageChange(partners.page + 1)} />
        </Pagination>
      </Container>
      <Pagination className='mt-5 block-Standart'>
          <div className='block-Standart'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={partners.page === page}
                    onClick={() => partners.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
             </div>
      </Pagination>
    </div>
  );
});

export default Partners;