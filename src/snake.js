import React, { Component } from 'react'
import styles from './snake.module.css'

class snake extends Component {
    state = {
        length: 0,
        modifier: 55,
        head: [],
        position: {
            up: -10,
            left: 160,
        },
        currentDirection: "down"
    }

    componentDidMount() {
        document.addEventListener('keydown', event => { 

            switch(event.keyCode) {
            case 37:

                let updatedLeft = this.state.position.left - this.state.modifier
                let updatedL = {
                    up: this.state.up,
                    left: updatedLeft,
                    // Up: this.state.up,
                    // down: this.state.down
                }
                this.setState({position: updatedL})
                
                break;

            case 38:
                let updatedUp = this.state.position.up - this.state.modifier
                let updatedU = {
                    top: updatedUp,
                    left: this.state.left,
                }
                this.setState({position: updatedU})
                break;

            case 39:
                let updatedRight = this.state.position.left + this.state.modifier
                let updatedR = {
                    top: this.state.up,
                    left: updatedRight,
                }
                this.setState({position: updatedR})
                break;
            case 40:
                let updatedDown = this.state.position.up + this.state.modifier
                let updatedD = {
                    top: updatedDown ,
                    left: this.state.left,
                }
                this.setState({position: updatedD})
                break;


            }
        })
    }


    render() {

        
    return (
        <div className={styles.snake} style={{up : this.state.position.up}, {left : this.state.position.left}}></div>
    )
    }
}


export default snake