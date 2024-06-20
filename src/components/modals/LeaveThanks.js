import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const LeaveThanks = ({show, onHide}) => {
    return(
        <Modal
        style={{borderColor:'#1F674F', borderWidth:'3px'}}
        show={show}
        onHide={onHide}
        centered
      >
          <Modal.Title className='display-2 mt-3' style={{paddingLeft:'15px', textAlign:'Left'}}>
            Оставить благодарность
          </Modal.Title>
          <Modal.Title className='caption mt-3' style={{color:'#3D9378', paddingLeft:'15px'}}>
            Значимость этих проблем настолько очевидна, что сложившаяся структура организации
          </Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Control
                placeholder="Кому выражаете благодарность?"
                style={{borderColor:'#1F674F', borderWidth:'1px', padding:'15px'}}
            />
            <Form.Control
                placeholder="Ваше имя"
                style={{marginTop:'20px', borderColor:'#1F674F', padding:'15px'}}
            />
            <Form.Control
                placeholder="Email"
                style={{marginTop:'20px', borderColor:'#1F674F', padding:'15px'}}
            />
            <Form.Control
                placeholder="Текст благодарности"
                style={{marginTop:'20px', borderColor:'#1F674F', padding:'15px'}}
            />
          </Form>
        </Modal.Body>
        <div style={{display:'flex', justifyContent:'left', height:'60px', marginBottom:'15px'}}>
                <Button className='button-3 mt-2' style={{border:'none', minWidth:'40%', fontSize:'16px', fontWeight:'700', marginLeft:'17px'}}>
                    Отправить благодарность
                </Button>
        </div>
      </Modal>
    )
}

export default LeaveThanks;