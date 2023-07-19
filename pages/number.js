import { useState } from "react"

// Sample code for two-way binding in ReactJS
export default function Number () {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const resetCount = (event) => {
        setCount(parseInt(event))
    }

    return (
        <>
            <p>This is number page</p>
            <button onClick={increase}>Click me</button>
            {
                count % 2 == 0 ? <OddNumber count={count}  reset={resetCount}/> 
                                    : <EvenNumber reset={resetCount} count={count} />
            }
        </>
    )
}

function OddNumber(props) {
    const { count, reset } = props
    const resetNumber = (event) => {
        reset(event.target.value)
    }
    return (
        <>
        <p>This is odd number {count} </p>
        <button value={2} onClick={resetNumber}>Reset</button>
        </>  
    )
}

function EvenNumber(props) {
    const { count, reset } = props
    const resetNumber = (event) => {
        reset(event.target.value)
    }
    return (
        <>
        <p>This is even number {count} </p>
        <button value={1} onClick={resetNumber}>Reset</button>
        </>  
    )
}
