import React, { useState } from 'react'
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import Order from './Order';


const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price) * el.count)
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
        <button className='delete-all' onClick={() => props.onDeleteAll()}>Удалить всё <FaTrashAlt /></button>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Товаров нет</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>School App</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                {/* Данные про количество товаров мы вставляем 
                в обычный тег span и добавляем к нему стили. */}
                <span className='count-shop-cart'>({props.orders.length})</span>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ₽{cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
