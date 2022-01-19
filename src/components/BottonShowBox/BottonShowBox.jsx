import React, { Component } from 'react'
import BottonShowBoxCss from './BottonShowBox.module.css'

export default class BottonShowBox extends Component {

  render() {
    const outstandingQuantity = this.props.toDoLists.reduce((prev, item) => prev + (item.done ? 1 : 0), 0)

    return (
      <div>
        <div className={BottonShowBoxCss.BottonShowBox}>
          <div>
            <input onChange={(event) => { this.props.selectAll(event.target.checked) }} type="checkbox" id="myInput" checked={outstandingQuantity === this.props.toDoLists.length && this.props.toDoLists.length > 0} />
            <label htmlFor="myInput">全选</label>
          </div>
          <div >已完成：{outstandingQuantity}</div>
          <div>
            <button onClick={() => { this.props.deleteDone() }} type="button">批量删除已完成!</button>
          </div>
        </div>
        <div className={BottonShowBoxCss.mask}></div>
      </div>

    )
  }
}
