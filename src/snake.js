import React, { Component } from 'react'
import styles from './snake.module.css'

class snake extends Component {
    state = {
        length: 0,
        modifier: 5,
        head: [],
        position: (10,10)
    }

    componentDidMount() {
        document.addEventListener('keydown', event => { 
            if(event.keyCode === 38) {
               // got key codes to work 
            }
        })
    }


    render() {

        
    return (
        <div className={styles.snake}></div>
    )
    }
}


export default snake