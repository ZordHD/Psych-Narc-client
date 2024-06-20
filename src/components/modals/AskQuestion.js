import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const AskQuestion = ({show, onHide}) => {
    return(
        <Modal
        style={{borderColor:'#1F674F', borderWidth:'3px'}}
        show={show}
        onHide={onHide}
        centered
      >
          <Modal.Title className='display-2 mt-3' style={{paddingLeft:'15px', textAlign:'Left'}}>
            Задать вопрос
          </Modal.Title>
          <Modal.Title className='caption mt-3' style={{color:'#3D9378', paddingLeft:'15px'}}>
            Значимость этих проблем настолько очевидна, что сложившаяся структура организации
          </Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Control
                placeholder="Заголовок вопроса"
                style={{borderColor:'#1F674F', borderWidth:'1px', padding:'15px'}}
                type="text"
            />
            <Form.Control
                placeholder="Ваше имя"
                style={{marginTop:'20px', borderColor:'#1F674F', padding:'15px'}}
                type="text"
            />
            <Form.Control
                placeholder="Email"
                style={{marginTop:'20px', borderColor:'#1F674F', padding:'15px'}}
                type="email"
            />
            <Form.Control
                placeholder="Пояснительный текст"
                style={{marginTop:'20px', borderColor:'#1F674F', padding:'15px'}}
                type="text"
            />
          </Form>
        </Modal.Body>
        <div style={{display:'flex', justifyContent:'left', height:'60px', marginBottom:'15px'}}>
                <Button className='button-3 mt-2' style={{border:'none', width:'40%', fontSize:'16px', fontWeight:'700', marginLeft:'17px'}}>
                    Отправить вопрос
                </Button>
        </div>
      </Modal>
    )
}

export default AskQuestion;