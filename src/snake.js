import React, { Component } from 'react'
import styles from './snake.module.css'

class snake extends Component {
    state = {
        length: 0,
        modifier: 5,
        head: [],
        position: {
            top: 10,
            left: 10
        },
        currentDirection: "down "
    }

    componentDidMount() {
        document.addEventListener('keydown', event => { 

            switch(event.keyCode) {
            case 37:
                // styles.left = parseInt(styles.left) - this.state.modifier + 'px'
                console.log('left')
                console.log(styles.left)
                break;
            case 38:
                console.log('up')
                break;
            case 39:
                console.log('right')
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