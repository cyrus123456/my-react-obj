import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import AddInputBox from './components/AddInputbox/AddInputBox';
import BottonShowBox from './components/BottonShowBox/BottonShowBox';
import ListBox from './components/ListBox/ListBox';

import { addThing, findAll, deleteOne, searchThing, controlIsDone, selectAll, deleteDone } from './netWork/request'
// import logo from './logo.svg';
import './App.css';
export default class App extends Component {

  async componentDidMount() {
    this.findAllList()
    PubSub.subscribe('searchThing', this.searchThing)
  }

  state = {
    toDoLists: [
      { id: 'toDo-1', name: '没有网络会展示，默认值', done: true },
      { id: 'toDo-2', name: '没有网络会展示，默认值', done: false },
      { id: 'toDo-3', name: '没有网络会展示，默认值', done: true },
    ]
  }

  findAllList = async () => {
    try {
      const res = await findAll()
      console.log('res :>> ', res);
      this.setState({
        toDoLists: res.data.reverse()
      })
    } catch (error) {
      console.log(error);
    }
  }





  addThing = async thingObj => {
    // this.setState({
    //   toDoLists: [thingObj, ...this.state.toDoLists]
    // })

    try {
      const res = await addThing(thingObj)
      if (res) {
        console.log('res.data :>> ', res.data);
      }
    } catch (error) {
      alert('数据库增加失败' + error)
    }
    this.findAllList()
  }



  deleteThing = async id => {
    if (window.confirm('确定删除吗？')) {
      // const newToDoLists = this.state.toDoLists.filter((item) => {
      //   return item.id !== id
      // })
      // this.setState({
      //   toDoLists: newToDoLists
      // })
      try {
        const res = await deleteOne({ id })
        if (res) {
          console.log('res.data :>> ', res.data);
        }
      } catch (error) {
        alert('数据库删除失败' + error)
      }
      this.findAllList()
    }
  }

  controlIsDone = async (id, done) => {
    // const newToDoLists = this.state.toDoLists.map((item) => {
    //   if (item.id === id) return { ...item, done }
    //   else return item
    // })
    try {
      const res = await controlIsDone({ id, done })
      console.log('res :>> ', res);
    } catch (error) {
      console.log('error :>> ', error);
    }
    this.findAllList()
  }
  searchThing = async (_, inputValue) => {
    console.log(`666搜索${inputValue}`);
    try {
      const res = await searchThing({ name: inputValue })
      if (res) {
        console.log(`查到的数据${JSON.stringify(res.data)}`);
        this.setState({ toDoLists: res.data })
      }
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
  deleteDone = async () => {
    // const newToDoLists = this.state.toDoLists.filter((item) => {
    //   return !item.done
    // })
    // this.setState({
    //   toDoLists: newToDoLists
    // })
    try {
      const res = await deleteDone()
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log('error :>> ', error);
    }
    this.findAllList()
  }

  selectAll = async isTrue => {
    // const newToDoLists = this.state.toDoLists.map((item) => {
    //   return { ...item, done: isTrue }
    // })
    // this.setState({
    //   toDoLists: newToDoLists
    // })

    try {
      const res = await selectAll({ done: isTrue })
      if (res) {
        console.log('res :>> ', res);
      }
    } catch (error) {
      alert(error)
    }
    this.findAllList()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <AddInputBox addThing={this.addThing} searchThing={this.searchThing} />
          <ListBox toDoLists={this.state.toDoLists} controlIsDone={this.controlIsDone} deleteThing={this.deleteThing} />
          <BottonShowBox deleteDone={this.deleteDone} selectAll={this.selectAll} toDoLists={this.state.toDoLists} />
        </div>
      </div>
    )
  }
}









