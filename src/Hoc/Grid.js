import React, { Component } from 'react'
import styles from './Layout.module.css'
import Snake from '../snake'
import Food from '../food'


class Grid extends Component {
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
                    let gridPos = (`${grid.i}, ${grid.j}`)
                    console.log(JSON.stringify(gridPos))
            return <div  key={JSON.stringify(gridPos)} className={styles.gridItem}/>
        })
        return(

            <div className={styles.snakeContainer}>
                <div className={styles.grid}>
                    {gridItems} 
                <Snake
                />
                <Food/>
                </div>
                
            </div>
            
        )
    }


}

export default Grid