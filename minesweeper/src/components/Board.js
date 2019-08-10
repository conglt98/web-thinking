import React, { Component } from 'react'
import Row from './Row';
import '../styles/Board.css'

export class Board extends Component {
    renderRows(){
        let rows = []
        let board = this.props.board;
        board.forEach((row, i) => {
            rows.push(<Row key={i} row={row}/>)
        });
        return rows
    }
    render() {
        return (
            <div className="board">
                {this.renderRows()}
            </div>
        )
    }
}

export default Board
