import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import Features from "./components/Features"
import ShowFullItem from "./components/ShowFullItem"
import Notification from "./components/Notification"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    // Выносим состояние сюда, так как его нужно передать в Items
    cartOpen: false,
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Завтрак 1',
          img: 'zavtrak 1.jpeg',
          desc: 'Каша на выбор + омлет + чай',
          category: 'zavtraki',
          price: '150.00'
        },
        {
          id: 2,
          title: 'Завтрак 2',
          img: 'zavtrak 2.jpg',
          desc: 'Каша на выбор + глазунья + чай',
          category: 'zavtraki',
          price: '150.00'
        },
        {
          id: 3,
          title: 'Завтрак 3',
          img: 'zavtrak 3.jpeg',
          desc: 'Каша на выбор + оладьи + чай',
          category: 'zavtraki',
          price: '150.00'
        },
        {
          id: 4,
          title: 'Круассан',
          img: 'kruassan.webp',
          desc: 'Круассан с вишней',
          category: 'bake',
          price: '50.00'
        },
        {
          id: 5,
          title: 'Язычок',
          img: 'iazichok.jpg',
          desc: 'Язычок с сахаром',
          category: 'bake',
          price: '50.00'
        },
        {
          id: 6,
          title: 'Пицца',
          img: 'pizza.jpg',
          desc: 'Пицца 1 кусок на выбор',
          category: 'bake',
          price: '50.00'
        },
        {
          id: 7,
          title: 'Морс',
          img: 'mors.jpg',
          desc: 'Морс на выбор',
          category: 'drink',
          price: '25.00'
        },
        {
          id: 8,
          title: 'Чай',
          img: 'chai.jpeg',
          desc: 'Чай с лимоном',
          category: 'drink',
          price: '25.00'
        },
        {
          id: 9,
          title: 'Горячий шоколад',
          img: 'goriachii shokolad.jpg',
          desc: 'Горячий шоколад 300 мл.',
          category: 'drink',
          price: '25.00'
        },
        {
          id: 10,
          title: 'Обед 1',
          img: 'obed 1.jpg',
          desc: 'Суп на выбор + котлета с пюре + чай + хлеб с маслом',
          category: 'obedi',
          price: '150.00'
        },
        {
          id: 11,
          title: 'Обед 2',
          img: 'obed 2.jpg',
          desc: 'Суп на выбор + рыба с картошкой + чай + хлеб с маслом',
          category: 'obedi',
          price: '150.00'
        },
        {
          id: 12,
          title: 'Обед 3',
          img: 'obed 3.jpeg',
          desc: 'Суп на выбор + гуляш с рисом + чай + хлеб с маслом',
          category: 'obedi',
          price: '150.00'
        }
      ],
      showFullItem: false,
      fullItem: {},
      showNotif: false // состояние для отображения нотификаций
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteAll = this.deleteAll.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onDeleteAll={this.deleteAll}  />
        {/* Показываем уведомление только если showNotif идет со значением true */}
        {this.state.showNotif && <Notification text="Добавлено в корзину" />}
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowNotif={this.onShowNotif} onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        <Features />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowNotif() {
    // Метод для изменения состояния связанного с уведомлением
    this.setState({ showNotif: true })

    // через время мы состояние должны обратно поменять
    setTimeout(() => {
      // меняем состояние через 2 секунды.
      this.setState({ showNotif: false })
    }, 2000)
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteAll() {
    // При удалении всех товаров мы просто очищаем весь массив
    this.setState({ orders: [] })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) { // Если товар уже есть в массиве, тогда увеличиваем его количество
        el.count++ // Увеличиваем count на 1
        // Меняем состояние для всего массива
        this.setState({ orders: [...this.state.orders] })
        isInArray = true
      }
    })

    if (!isInArray) {
      // Если первое добавление элемента, то добавляем к нему количество в размере 1
      item.count = 1
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App;