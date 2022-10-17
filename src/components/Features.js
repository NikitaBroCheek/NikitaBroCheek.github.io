import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return (
            <div className='features'>
                <span>Преимущества</span>
                <h2>Краткое описание наших преимуществ</h2>
                <div className='blocks'>
                    <div>
                        <img src="./img/safety.png" alt='' />
                        <h3>Удобно</h3>
                        <p>Удобный пункт выдачи заказов!</p>
                    </div>
                    <div>
                        <img src="./img/reliably.png" alt='' />
                        <h3>Надежно</h3>
                        <p>Готовим еду только из натуральных продуктов!</p>
                    </div>
                    <div>
                        <img src="./img/delicous.png" alt='' />
                        <h3>Вкусно</h3>
                        <p>У нас всегда только вкусная и полезная еда!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features