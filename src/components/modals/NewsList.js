import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { fetchNews, deleteNews } from '../../http/newsAPI'; // Импорт функции fetchNews
import EditNewsModal from './EditNewsModal';

const NewsList = ({ show, onHide }) => {
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (show) {
      fetchNewsForPage(currentPage);
    }
  }, [show, currentPage]);

  const fetchNewsForPage = async (page) => {
    const data = await fetchNews(page);
    setNewsList(data.rows);
    setTotalPages(Math.ceil(data.count / 3)); 
  };

  const handleDelete = async (id) => {
    await deleteNews(id);
    setNewsList(newsList.filter((news) => news.id !== id));
  };

  const handleEdit = (news) => {
    setSelectedNews(news);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Список новостей</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {newsList.map((news) => (
          <div key={news.id}>
            <h2>{news.name}</h2>
            <Button variant="danger" onClick={() => handleDelete(news.id)}>
              Удалить
            </Button>
            <Button variant="primary" onClick={() => handleEdit(news)}>
              Редактировать
            </Button>
          </div>
        ))}
        <div>
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            Предыдущая страница
          </Button>
          <span> Страница {currentPage} из {totalPages}</span>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Следующая страница
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
      <EditNewsModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        news={selectedNews}
      />
    </Modal>
  );
};

export default NewsList;