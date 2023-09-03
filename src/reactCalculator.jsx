import { useState } from 'react'
import { evaluate } from 'mathjs'

export const Calculator = () => {
  const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
  ]
  const operations = ['+', '-', '*', '/']

  const equalSimbol = '='

  const [value, setValue] = useState('')

  const createHandleClick = (number) => {
    return setValue(value.concat(number))
  }

  return (
    <>
      <h1>Calculator App</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, i) => (
          <div key={i} role='row'>
            {row.map(number => (
              <button
                onClick={() => createHandleClick(number)}
                key={number}
              >
                {number}
              </button>)
            )}
          </div>
        ))}
        {operations.map((operation) => (
          <button
            key={operation}
            onClick={() => createHandleClick(operation)}
          >
            {operation}
          </button>
        ))}
        <button
          onClick={() => setValue(evaluate(value))}
        >
          {equalSimbol}
        </button>
      </div>
    </>
  )
}
