import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeVal} from './Reducers/ExampleReducer'; 
// useSelector is grab the vals from the store state
// useDispatch is to fire any reducer function in the store you just call the useDispatch(reducerFuncToUse)
// we import the functions we want use from the actual reducer file and pass is into the useDispact exmple: useDispatch(changeVal(payload))

function Example(){

  const initalState = {}
  const [state, setState] = useState(initalState) // state is equal initalstate till it gets updated / setState is a funtions 'setState(newState)' that changes the state
  // example : setState({loggedIn : !state.loggedIn}) /or/ setState(pre => pre.count + 1)

  const exampleStorState = useSelector(state => state.example) // state is all the states and example is the name of the state i want to use 

  useEffect(() => {}, []) //essentally ComponentDidMount() for hooks . The second argument isnt needed but it makes it that the funtion donst fire on every rerender, only when the array val is changed 


  return(
    <>
      The learining how to use redux and function components page
    </>
  )
}

export default Example;