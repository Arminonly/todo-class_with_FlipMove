import React, { Component } from 'react'

import './App.css'
import './component/listOfItem.css'
import ListOfItems from './component/listOfItems'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemArray: [],
      inputedItem: {
        text: '',
        key: '',
        complited: false,
      },
    }
    this.inputingHandler = this.inputingHandler.bind(this)
    this.addInputing = this.addInputing.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }


  addInputing(e) {
    e.preventDefault()
    const newItem = this.state.inputedItem
    console.log(newItem)

    if (newItem.text !== '') {
      const addItem = [...this.state.itemArray, newItem]
      this.setState({
        itemArray: addItem,
        inputedItem: {
          text: '',
          key: '',
        },
      })
    }
  }

  inputingHandler(e) {
    this.setState({
      inputedItem: {
        text: e.target.value,
        key: Date.now(),
      },
    })
  }
  changeValue(text, key) {
    const changeValues = this.state.itemArray

    // eslint-disable-next-line
    changeValues.map((changeValue) => {
      if (changeValue.key === key) {
        changeValue.text = text
        
      }
    })
    this.setState({
      itemArray: changeValues,
    })
   
    
  }

  deleteItem(key) {
    const itemsToDelete = this.state.itemArray.filter(
      (itemToDelete) => itemToDelete.key !== key
    )
    this.setState({
      itemArray: itemsToDelete,
    })
  }

  render() {
    const { inputedItem } = this.state
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addInputing}>
            <input
              type="text"
              placeholder="Add a todo"
              value={inputedItem.text}
              onChange={this.inputingHandler}
            />
            <button type="submit">Add todo</button>
          </form>
        </header>
        <ListOfItems
          items={this.state.itemArray}
          deleteItem={this.deleteItem}
          changeValue={this.changeValue}
        />
      </div>
    )
  }
}
