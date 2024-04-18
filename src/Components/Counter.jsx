import {useState} from 'react'
export default function Counter()
{
    const [counter, setCounter] = useState()
    function Increment()
    {
        setCounter(counter + 1)
    }
    function Decrement()
    {
        setCounter(counter - 1)
    }
    return <div>
        <h1>Count value is:{Counter}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
}