import React, { Component } from 'react'
import styles from './snake.module.css'

class snake extends Component {
    state = {
        length: 0
    }
    render() {
    return (
<div className={styles.snake}></div>
    )
    }
}


export default snake