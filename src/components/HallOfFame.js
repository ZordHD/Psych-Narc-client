import React, { useEffect, useContext } from 'react';
import { Pagination, Card, CardGroup, Container } from 'react-bootstrap';
import { Context } from '../index';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/utility-styles.css';
import '../styles/text-styles.css'
import { observer } from 'mobx-react-lite';
import { fetchHallOfFame } from '../http/halloffameAPI';

const HallOfFame = observer(() => {
  const { halloffame } = useContext(Context);
  const pages = []

  useEffect(() => {
    fetchHallOfFame(halloffame.page, halloffame.limit).then(data => {
      halloffame.setHallOfFame(data.rows);
      halloffame.setTotalCount(data.count);
    });
  }, [halloffame.page, halloffame.limit]);

  const totalPages = Math.ceil(halloffame.totalCount / halloffame.limit);

  const handlePageChange = (pageNumber) => {
    halloffame.setPage(pageNumber);
  };

  return (
    <div>
      <Container className='block-Standart mt-3' style={{overflowX:'hidden'}}>
        <Pagination style={{marginRight:'20px', marginTop:'60px'}}>
          <Pagination.Prev 
            disabled={halloffame.page === 1} 
            onClick={() => handlePageChange(halloffame.page - 1)} />
        </Pagination>
        <Row xs={1} className="justify-content-center">
          {halloffame.hof.map(item => (
            <Col key={item.id} className='col-md-6 col-lg-3 g-5'>
              <Card className='card-HallOfFame' style={{border:'none'}}>
                <Card.Img 
                  variant="top" 
                  src={process.env.REACT_APP_API_URL + item.image} 
                  className='card-img-hof-top' />
                <Card.Body>
                  <Card.Title 
                    className='body-Semibold' 
                    style={{color:'white',  marginBottom:'4px'}}> 
                    {item.name} 
                  </Card.Title>
                  <Card.Text 
                    className='body-Small-Text' 
                    style={{color:'white', marginBottom:'4px'}}>
                      {item.post}                  
                  </Card.Text>
                  <div className='div-Card-Administration block-Standart'/>
                  <Card.Text className='body-Smallest-Text mt-2' style={{color:'white'}}>
                      {item.text}            
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination style={{marginLeft:'20px', marginTop:'60px'}}>
          <Pagination.Next 
            disabled={halloffame.page === totalPages} 
            onClick={() => handlePageChange(halloffame.page + 1)} />
        </Pagination>
      </Container>
      <Pagination className='mt-5 block-Standart'>
        <div className='block-Standart'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page =>
            <Pagination.Item
              key={page}
              active={halloffame.page === page}
              onClick={() => halloffame.setPage(page)}
            >
              {page}
            </Pagination.Item>
          )}
        </div>
      </Pagination>
    </div>
  );
});

export default HallOfFame;