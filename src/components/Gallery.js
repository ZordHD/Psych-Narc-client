import React, { useState, useContext, useEffect } from 'react';
import { Pagination, Card, CardGroup, Container } from 'react-bootstrap';
import { Context } from '..';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/utility-styles.css';
import '../styles/text-styles.css'
import { fetchGallery } from '../http/galleryAPI';
import { observer } from 'mobx-react-lite';

const Gallery = observer(() => {
  const { gallery } = useContext(Context)
  const pages = []

  useEffect(() => {
    fetchGallery(gallery.page, gallery.limit).then(data => {
      gallery.setServ(data.rows);
      gallery.setTotalCount(data.count);
    });
  }, [gallery.page, gallery.limit]);

  const totalPages = Math.ceil(gallery.totalCount / gallery.limit);

  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1)
  }


  const handlePageChange = (pageNumber) => {
    gallery.setPage(pageNumber);
  };

  return (
    <div>
    <Container className='block-Standart'>
          <Pagination style={{marginRight:'20px', marginTop:'70px'}}>
            <Pagination.Prev 
              disabled={gallery.page === 1} 
              onClick={() => handlePageChange(gallery.page - 1)} />
          </Pagination>
      <Row  xs ={1} md={2} lg={4} сlassName="mt-5 block-Standart">
        {gallery.gallr.map((galleryItem, index) => (
          <Col key={index} className='g-5'>
            <Card className='card-Gallery'>
              <Card.Img 
                variant="top"
                className='card-img-gallery-top'  
                src={process.env.REACT_APP_API_URL + galleryItem.image} 
                style={{borderRadius:'10px 10px 0px 0px'}} />
              <div className="image-Deco">
                <div className="flex-wrap block-Standart">
                  <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination style={{marginLeft:'20px', marginTop:'70px'}}>
         <Pagination.Next 
            disabled={gallery.page === totalPages} 
            onClick={() => handlePageChange(gallery.page + 1)} />
        </Pagination>
      </Container>
      <Pagination className='mt-5 block-Standart'>
          <div className='block-Standart'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={gallery.page === page}
                    onClick={() => gallery.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
             </div>
      </Pagination>
    </div>
  );
});

export default Gallery;