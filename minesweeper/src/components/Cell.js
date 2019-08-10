import React, { Component } from 'react'
import { FaBomb } from 'react-icons/fa'
import '../styles/Cell.css'

const openStyle = {
    width: 40,
    height: 40,
    lineHeight: '40px',
    border: 'solid 1px darkgray'
}

const colorNumbers = ['blue', 'green', 'red', 'navy', 'darkred', 'deepskyblue', 'yellow', 'orange']

export class Cell extends Component {

   
    render() {
        let bombCount = this.props.bombCount
        let content = ''
        let style = openStyle

        if (bombCount > 0) {
            style = Object.assign({}, openStyle, {color: colorNumbers[bombCount-1]})
            content = bombCount
        }

        if (bombCount === -1){
            content = <FaBomb className="iconBombInBoard"/>
            style = Object.assign({}, openStyle, {background: "red"})
        }

        return (
            <div className="cell" style={style}>
                {content}
            </div>
        )
    }
}

export default Cell