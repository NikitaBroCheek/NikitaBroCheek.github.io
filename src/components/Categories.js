import React, { Component } from 'react'

export class Categories extends Component {
    // Для хранения массива будем использовать состояние
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all', // вместо id у нас тут будут ключи (уникальные)
                    name: 'Всё' // А это просто название категории
                },
                {
                    key: 'zavtraki',
                    name: 'Завтраки'
                },
                {
                    key: 'bake',
                    name: 'Выпечка'
                },
                {
                    key: 'drink',
                    name: 'Напитки'
                },
                {
                    key: 'obedi',
                    name: 'Обеды'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories