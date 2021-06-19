import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import CreateProductModal from '../component/modal/CreatedProductModal'

const Admin = () => {
    const [productVisible, setProductVisible] = useState(false)
    

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={()=>setProductVisible(true)}
            >
                Добавить продукт
            </Button>
            <CreateProductModal show={productVisible} onHide={()=>setProductVisible(false)}/>
        </Container>
    );
};

export default Admin;
