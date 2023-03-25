import React, { useEffect } from 'react'
import Questions from './Questions'

import { useSelector, useDispatch } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';

export default function Quiz(){
  
 //const trace = useSelector(state => state.questions.trace);
 const { queue, trace } = useSelector(state => state.questions);
 const dispatch = useDispatch()

 useEffect(() => {
  console.log(trace)
 })

  function onNext()
    {
      console.log('On next click')

      if(trace < queue.length){

        /**update the trace value by one using MoveNextAction */
         dispatch(MoveNextQuestion())

      }

    }
  function onPrev()
    {
      console.log('On onPrev click')

      if(trace > 0){

        /**decrease the trace value by one using MovePrevAction */
      dispatch(MovePrevQuestion())
      }

      
    }
  return(
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      {
        <Questions></Questions>
      }
      <div className='grid'>
      <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
      </div>
    )
}