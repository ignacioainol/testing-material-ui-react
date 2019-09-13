import React, { Component, Fragment } from 'react'
import {Header, Footer} from './Layout'
import Exercises from './Exercises'
import {muscles, exercises} from  '../store'
import Create from '../Components/Dialogs/Create'

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles(){
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles] 
      ? [...exercises[muscles], exercise]
      : [exercise]

      return exercises
    },{})
    )
  }

  handleCategorySelected = category => {
      this.setState({
        category
      })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render(){
    const exercises = this.getExercisesByMuscles(),
    { category, exercise } = this.state
    return <Fragment>
      <Header/>
        <Create/>
        <Exercises
           exercise={exercise}
           category={category}
           exercises={exercises}
           onSelect = {this.handleExerciseSelected}
           />
      <Footer
        category={category}
        onSelect={this.handleCategorySelected} 
        muscles={muscles}/>
    </Fragment>
  }
}
