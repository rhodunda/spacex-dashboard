import React, { Component } from 'react'
import styles from './Layout.module.css'
import Food from '../food'
import Snake from '../snake'

class Layout extends Component {
    state = {
        row: 15,
        colum: 15,
        grid: []
    }

    render() {
        return(
            <div className={styles.board}>
                <Food></Food>
                <Snake></Snake>

            </div>
            
        )
    }


}

export default Layout