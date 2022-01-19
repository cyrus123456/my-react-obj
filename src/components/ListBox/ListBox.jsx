import React, { Component } from 'react'
import ThingsBox from '../ThingsBox/ThingsBox';

import ListBoxCss from './ListBox.module.css'

export default class ListBox extends Component {
  render() {
    // const { toDoLists } = this.props
    return (
      <div className={ListBoxCss.ListBox}>
        <h4 className={ListBoxCss.my_h4}>清单列表</h4>
        {
          this.props.toDoLists.map((item) => {
            return <ThingsBox deleteThing={this.props.deleteThing} controlIsDone={this.props.controlIsDone} key={item.id} {...item}></ThingsBox>
          })
        }
      </div>
    )
  }
}
