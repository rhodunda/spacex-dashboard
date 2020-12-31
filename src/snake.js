import React, { Component } from 'react'
import styles from './snake.module.css'

class snake extends Component {
    state = {
        length: 0,
        modifier: 5,
        head: [],
        position: {
            top: 15,
            left: 150,
        },
        currentDirection: "down"
    }

    componentDidMount() {
        document.addEventListener('keydown', event => { 

            switch(event.keyCode) {
            case 37:

                let updatedLeft = this.state.position.left - this.state.modifier
                let updatedL = {
                    top: this.state.top,
                    left: updatedLeft,
                    Up: this.state.up,
                    down: this.state.down
                }
                this.setState({position: updatedL})
                
                break;

            case 38:
                let updatedUp = this.state.position.up - this.state.modifier
                let updatedU = {
                    top: this.state.top,
                    left: this.state.left,
                    up: updatedUp,
                    down: this.state.down
                }
                this.setState({position: updatedU})
                break;

            case 39:
                let updatedRight = this.state.position.left + this.state.modifier
                let updatedR = {
                    top: this.state.top,
                    left: updatedRight,
                }
                this.setState({position: updatedR})
                break;
            case 40:
                console.log('down')
                break;


            }
        })
    }


    render() {

        
    return (
        <div className={styles.snake} style={{top : this.state.position.top}, {left : this.state.position.left}}></div>
    )
    }
}


export default snake