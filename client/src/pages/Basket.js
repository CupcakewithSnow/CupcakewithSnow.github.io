/* eslint-disable array-callback-return */
import { Button, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductOfBasket, getProductInBasketStore, getProductOfBasket, getProductOfBasketHook } from '../http/productApi'
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
    buttons: {
        color: 'white',
        backgroundColor: '#990033',
        '&:hover': {
            color: 'white',
            backgroundColor: '#FF3300'
        },
        marginRight: theme.spacing(1)
    }
}))
const Basket = () => {
    const user = useSelector(state => state.User.user)
    const basket = useSelector(state => state.Basket.basket)
    const product = useSelector(state => state.Basket.product)
    const [abvgdec, setPp] = useState([])
    const id = user.id
    const classes = useStyles()
    const dispatch = useDispatch()
    const clickRemove = (productId) => {
        deleteProductOfBasket({ productId })
    }
    let alalalal = []
    const asdp = []
    useEffect(() => {
        dispatch(getProductInBasketStore())
        getProductOfBasketHook(id).then(data => setPp(data))
    }, [dispatch, id])
    abvgdec.map(i => {
        return product.map(j => {
            if (i.productId === j.id) asdp.push(j)
        })
    })
    return (
        <Container className='d-flex mt-5'>
            {console.log(abvgdec)}
            <Col md={9}>
                <div style={{ fontSize: '30px', fontWeight: 'bold' }}>
                    <h1>Товаров ({abvgdec.length})</h1>
                </div>
                <div>
                    {abvgdec.map(i => {
                        return product.map(j => {
                            if (i.productId === j.id) {
                                return (
                                    <div ket={j.id} className='d-flex mb-2'>
                                        <div><img src={process.env.REACT_APP_API_URL + j.img} style={{ width: 150, height: 150 }} alt='img' /></div>
                                        <div className='ml-4'>
                                            <div><strong>Цена:</strong>{j.price}</div>
                                            <div><strong>Название:</strong>{j.name}</div>
                                            <Button className={classes.buttons} onClick={() => {
                                                clickRemove(i.id)
                                                
                                            }

                                            }>Удалить</Button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    })}
                </div>
            </Col>
            <Col md={3}>
                <Card className='p-2 d-flex flex-column justify-content-between' style={{ height: '200px' }}>
                    <div className='d-flex justify-content-between'>
                        <div style={{ fontWeight: 'bold' }}>Итого</div>
                        <span>{
                            asdp.map(p => p.price).reduce((sum, current) => sum + current, 0)
                        }</span>
                    </div>

                    <Button className={classes.buttons}>Купить</Button>
                </Card>
            </Col>
        </Container>
    )

}

export default Basket
