import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { fetchDocument, fetchOneDocument } from '../http/documentsAPI';
import Docs from '../assets/Docs.svg';
import axios from 'axios';
import fileDownload from 'js-file-download';

const Documents = observer(() => {
  const { documents } = useContext(Context);
  const pages = [];

  useEffect(() => {
    fetchDocument(documents.page, documents.limit).then(data => {
      documents.setDocs(data.rows);
      documents.setTotalCount(data.count);
    });
  }, [documents.page, documents.limit]);

  const totalPages = Math.ceil(documents.totalCount / documents.limit);

  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }

  const handlePageChange = (pageNumber) => {
    documents.setPage(pageNumber);
  };

  const downloadDocument = async (id) => {
    try {
      const documentData = await fetchOneDocument(id);
      const response = await axios.get(`http://localhost:5000/api/documents/${id}`, {
        responseType: 'blob',
      });
      const contentDisposition = response.headers['content-disposition'];
      const contentType = response.headers['content-type'];
      const filename = contentDisposition ? contentDisposition.split('filename=')[1] : 'document';

      // Определяем расширение файла на основе contentType
      let fileExtension;
      if (contentType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        fileExtension = 'docx';
      } else if (contentType === 'application/pdf') {
        fileExtension = 'pdf';
      } else {
        console.error('Unsupported file type');
        return;
      }

      fileDownload(response.data, `${filename}.${fileExtension}`);
    } catch (error) {
      console.error('Error downloading document:', error);
    }
  };


  return (
    <div>
      <Container className='block-Standart mt-4'>
        <Pagination style={{ marginRight: '20px', marginTop: '105px' }}>
          <Pagination.Prev
            disabled={documents.page === 1}
            onClick={() => handlePageChange(documents.page - 1)}
          />
        </Pagination>
        <Row className="mt-5 block-Standart" style={{ width:'100vw'}}>
          {documents.docs.map((docsItem, index) => (
            <Col key={index} className='g-5 col-md-4 col-lg-4 col-xs-1'>
              <Card className='card-Docs' style={{ display: 'flex', border: 'none' }}>
                <Card.Img
                  variant='left'
                  src={Docs}
                  alt='Документ'
                  style={{ paddingBottom: '15px', paddingTop: '15px', paddingLeft: '20px' }}
                />
                <Card.Body style={{ width: '100%' }}>
                  <div
                    className='body-Bold name-doc'
                    style={{ color: 'white', cursor: 'pointer'}}
                    onClick={() => downloadDocument(docsItem.id)}
                  >
                    {docsItem.name}
                  </div>
                  <div className='body-Small-Text' style={{ color: 'white' }}>
                    {docsItem.text}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination style={{ marginLeft: '20px', marginTop: '105px' }}>
          <Pagination.Next
            disabled={documents.page === totalPages}
            onClick={() => handlePageChange(documents.page + 1)}
          />
        </Pagination>
      </Container>
      <Pagination className='mt-5 block-Standart'>
        <div className='block-Standart'>
          {pages.map(page => (
            <Pagination.Item
              key={page}
              active={documents.page === page}
              onClick={() => documents.setPage(page)}
            >
              {page}
            </Pagination.Item>
          ))}
        </div>
      </Pagination>
    </div>
  );
});

export default Documents;
