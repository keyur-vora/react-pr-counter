import { Component } from "react"
import './CounterApp.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }


    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset() {
        this.setState({
            count: 0
        })
    }


    render() {
        return (
            <div className="main">
                <div className="counterapp">
                <h1>Counter App</h1>
                <div className="count">
                    <button onClick={() => this.increment()}>+</button>
                    <span>{this.state.count}</span>
                    <button onClick={() => this.decrement()}>-</button>
                </div>
                <button className="resetrbtn" onClick={() => this.reset()}>Reset</button>
            </div>
            </div>
        )
    }

}

export default Counter;