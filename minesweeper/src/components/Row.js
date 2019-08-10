import React, { Component } from 'react'
import Cell from './Cell'
import '../styles/Row.css'

export class Row extends Component {
  
    renderCells(){
        let cells = []
        let row = this.props.row
        row.forEach((cell, i) => {
            cells.push(<Cell key={i} bombCount={cell}/>)
        });
        return cells
    }
    render() {
        return (
            <div className="row">
                {this.renderCells()}
            </div>
        )
    }
}

export default Row
