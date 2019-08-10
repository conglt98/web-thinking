import React, { Component } from 'react'
import Form from './components/Form'
import Board from './components/Board';
import generateGame from './generateGame';
import './styles/Game.css'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                [1, 1, 1],
                [1, -1, 1],
                [1, 1, 1]
            ],
            numrows: 3,
            numcols: 3,
            numbomb: 1,
        }
        this.createMapGame = this.createMapGame.bind(this);
        this.inputConfig = this.inputConfig.bind(this);
    }

    createMapGame(e) {
        e.preventDefault()
        let { numrows, numcols, numbomb } = this.state
        if (numrows>100 || numcols>100){
            alert("Input rows and cols >= 0 and <= 100!")
            return;
        }
        
        if (numrows * numcols < numbomb) {
            alert("Invalid number of bomb :(")
            return;
        }
        this.setState({ board: generateGame(numrows, numcols, numbomb) })
    }

    inputConfig(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    render() {
        return (
            <div className="game">
                <Form createMapGame={this.createMapGame} inputConfig={this.inputConfig} />
                <Board board={this.state.board} />
            </div>
        )
    }
}

export default App
