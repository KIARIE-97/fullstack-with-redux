
import {  useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../app/store'
import { add, subtract, addByValue } from './counterSlice'

const counters = () => {
    const count = useSelector((state:RootState) => state.counter.value)
    // const dispatch = useDispatch<AppDispatch>()
    const dispatch: AppDispatch = useDispatch()

    const addnumber = ()=> {
        //call dispatch here
          dispatch( add())
    }
    const subtractnumber = ()=> {
        //call dispatch here
          dispatch( subtract())
    }
    const addbyAmount = (value:number) => {
        //call dispatch here
        dispatch(addByValue(value))
    }
  return (
    <div> 
    <h1>counters</h1>
    <h2>{count}</h2>
        <button onClick={addnumber}>addition</button>
    <button onClick={subtractnumber}>subtract</button>
    <button onClick={() => addbyAmount(2)}>add by value</button>
    </div>
  )
}

export default counters