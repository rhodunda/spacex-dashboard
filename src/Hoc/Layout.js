import React, { Component } from 'react'
import styles from './Layout.module.css'
import Food from '../food'
import Snake from '../snake'

class Layout extends Component {
    state = {
        row: 10,
        colum: 10,
        grid: []
    };

    componentWillMount () {
        this.gridHandler()
    }

 gridHandler = () => {
    const grid = [];
        for(let i = 0; i < this.state.row; i++) {
            for(let j = 0; j < this.state.colum; j++) {
                grid.push({
                    i,
                    j,
                })
            }
        }
        this.setState({grid: grid})
    }
    


    render() {


        const gridItems = this.state.grid.map((grid) => {
            return <div className={styles.gridItem}/>
        })
        return(

            <div className={styles.snakeContainer}>
                <div className={styles.grid}>{gridItems}</div>
            </div>
            // <div className={styles.board}>
            //     <Food></Food>
            //     <Snake></Snake>

            // </div>
            
        )
    }


}

export default Layout