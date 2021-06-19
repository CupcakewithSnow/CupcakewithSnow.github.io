import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Col, Dropdown, Form, Row, } from "react-bootstrap"
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { useSelector } from 'react-redux';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


const CreateDevice = ({ show, onHide }) => {
    const type = useSelector(state => state.Product.type)
    console.log(type)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [price, setPrice] = useState(0)

    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить продукт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='m-4'>
                        <DropdownToggle >
                            Выбирете тип
                        </DropdownToggle>
                        <DropdownMenu >
                            {type.map(type => <DropdownItem key={type.id}>{type.name}</DropdownItem>)}
                        </DropdownMenu>
                        <Form.Control className='mt-3' placeholder='Введите название устройства' value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Control className='mt-3' placeholder='Введите цену устройства' type='number' value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                        <Form.Control className='mt-3' placeholder='Выберете изображения устройства' type='file' onChange={selectFile} />
                        <Button variant='outline-dark' onClick={addInfo} className='mt-3'>Добавить новое свойство</Button>
                        {info.map(i =>
                            <Row className='mt-3' key={i.number}>
                                <Col md={4} className='mb-3'>
                                    <Form.Control
                                        placeholder='Введите Заголовок'
                                    />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <Form.Control
                                        placeholder='Введите описание'
                                    />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <Button onClick={() => removeInfo(i.number)}>Удалить</Button>
                                </Col>
                            </Row>
                        )}
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};


export default CreateDevice;