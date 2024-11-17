
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyApple, buyOrange } from '../redux/fruit/fruitAction';
import { buy_sandewich, buysandewich } from '../redux/food/foodAction';
const Mystore = () => {
    const {apple , orange} = useSelector((state)=> state.fruit)
    const {sandewich} = useSelector((state)=> state.food)
const dispatch = useDispatch()
    return (
        <div>
            <h5 className='text-center mt-2'>تعداد سیب ها : {apple}</h5>
            <h5 className='text-center mt-2'>تعداد سیب ها : {orange}</h5>
            <h5 className='text-center mt-2'>تعداد ساندویچ : {sandewich}</h5>
            <div className='text-center mt-3'>
                <button className='btn btn-success mx-3' onClick={()=>dispatch(buyApple())}>خرید سیب</button>
                <button className='btn btn-warning mx-3' onClick={()=>dispatch(buyOrange())}>خرید پرتقال</button>
                <button className='btn btn-danger mx-3' onClick={()=>dispatch(buysandewich())}>خرید ساندویچ</button>
            </div>
        </div>
    );
}
export default Mystore ;