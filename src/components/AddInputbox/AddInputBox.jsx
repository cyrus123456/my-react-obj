import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import AddInputBoxCss from './AddInputBox.module.css'

export default class AddInputBox extends Component {
  handleAddThing = event => {
    // console.log(`event`, event.target.value)
    if (event.key === "Enter" && event.target.value) {
      this.props.addThing({
        id: `toDo-${new Date().getTime()}`,
        name: event.target.value,
        done: false
      })
      event.target.value = ''
    }
    if (event.key !== "Enter") {
      // this.props.searchThing(event.target.value)
      PubSub.publishSync('searchThing', event.target.value);
    }
  }
  render() {
    return (
      <div>
        <div className={AddInputBoxCss.mask}></div>
        <input type="text" onKeyUp={this.handleAddThing} className={AddInputBoxCss.input} />
      </div>
    )
  }
}
