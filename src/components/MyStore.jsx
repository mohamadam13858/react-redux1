
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyApple, buyOrange } from '../redux/fruit/fruitAction';
import { buy_sandewich, buysandewich } from '../redux/food/foodAction';
const Mystore = () => {
    const [itemcount , setItemCount] = useState({
        apple: 1 , 
        orange: 1 ,
        sandewich: 1
    })
    const { apple, orange } = useSelector((state) => state.fruit)
    const { sandewich } = useSelector((state) => state.food)
    const dispatch = useDispatch()
    return (
        <div>
            <h5 className='text-center mt-2'>تعداد سیب ها : {apple}</h5>
            <h5 className='text-center mt-2'>تعداد نارنگی ها : {orange}</h5>
            <h5 className='text-center mt-2'>تعداد ساندویچ : {sandewich}</h5>
            <div className=' row justify-content-center'>
                <div className=' col-12 col-md-4 col-lg-2'>
                    <div className=' input-group mb-3 dir_ltr'>
                        <input type="number" className=' form-control' value={itemcount.apple} onChange={(e)=>setItemCount({...itemcount , apple: e.target.value})} />
                        <button className=' input-group-text btn btn-success' onClick={()=>dispatch(buyApple(itemcount.apple))}> {itemcount.apple} خرید سیب</button>
                    </div>
                </div>
                <div className=' col-12 col-md-4 col-lg-2'>
                    <div className=' input-group mb-3 dir_ltr'>
                        <input type="number" className=' form-control'  value={itemcount.orange} onChange={(e)=>setItemCount({...itemcount , orange: e.target.value})} />
                        <button className=' input-group-text btn btn-warning' onClick={()=>dispatch(buyOrange(itemcount.orange))}> {itemcount.orange} خرید نارنگی</button>
                    </div>
                </div>
                <div className=' col-12 col-md-4 col-lg-2'>
                    <div className=' input-group mb-3 dir_ltr'>
                        <input type="number" className=' form-control'  value={itemcount.sandewich} onChange={(e)=>setItemCount({...itemcount , sandewich: e.target.value})} />
                        <button className=' input-group-text btn btn-danger' onClick={()=>dispatch(buysandewich(itemcount.sandewich))}> {itemcount.sandewich} خرید ساندویچ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Mystore;