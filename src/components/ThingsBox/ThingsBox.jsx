import React, { Component } from 'react'
import ThingsBoxCss from './ThingsBox.module.css'

export default class ThingsBox extends Component {
  state = {
    isMouseOver: false
  }
  handleOnMouse = myFlag => {
    return () => {
      this.setState({
        isMouseOver: myFlag
      })
    }
  }

  handleOnChange = id => event => {
    console.log('event.target.value :>> ', id, event.target.checked,);
    this.props.controlIsDone(id, event.target.checked)
  }



  render() {
    const { id, name, done } = this.props
    return (
      <div onMouseOver={this.handleOnMouse(true)} onMouseOut={this.handleOnMouse(false)} className={`${ThingsBoxCss.ThingsBox} ${this.state.isMouseOver && ThingsBoxCss.onMouseThingsBox}`}>
        <input onChange={this.handleOnChange(id)} className={ThingsBoxCss.my_input} type="checkbox" id={id} checked={done} />
        <label className={ThingsBoxCss.my_lable} htmlFor={id}>{name}</label>
        {/* {
          this.state.isMouseOver ?
            <span className={`${ThingsBoxCss.onMouseMy_span}`}>X</span>
            : null
        } */}
        <span onClick={() => this.props.deleteThing(id)} className={`${ThingsBoxCss.my_span} ${this.state.isMouseOver && ThingsBoxCss.onMouseMy_span}`}>X</span>
        {/* <span className={`${ThingsBoxCss.my_span}`}>X</span> */}
      </div>

    )
  }
}
