import React, { Component } from 'react'
import '../styles/Form.css'
import { FaBomb } from 'react-icons/fa'

export class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.createMapGame} className="form">
                <h1><FaBomb className="iconBomb"/> Minesweeper <FaBomb className="iconBomb"/></h1>
                <div className="config">
                <table>
                    <tbody>
                        <tr>
                            <th>Rows : </th>
                            <th>Columns : </th>
                            <th>Bomb : </th>
                        </tr>
                        <tr>
                            <td><input type="number" name="numrows" required min="1"
                                onChange={this.props.inputConfig} autoComplete="off"/></td>
                            <td><input type="number" name="numcols" required min="1"
                                onChange={this.props.inputConfig} autoComplete="off"/></td>
                            <td> <input type="number" name="numbomb" required min="0"
                                onChange={this.props.inputConfig} autoComplete="off"/></td>
                            <button type="submit" className="btnSubmit">GENERATE</button>
                        </tr>
                    </tbody>
                </table>
                </div>
                
            </form>
        )
    }
}

export default Form