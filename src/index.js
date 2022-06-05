import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import Sonam from './Sonam/Sonam'

const root = ReactDOM.createRoot(document.getElementById('root'))
const numbers = [1, 2, 3]
const newNums = [...numbers, 4, 5, 6]
const person = {
  name: 'mayur',
  hobbies: ['working out at the gym', 'listening to music'],
  loves: ['react']
}
const updatedPerson = { ...person, likes: [...person.loves, 'spring'] }
const update2 = { ...person, mood: 'happy' }
console.log(update2)
console.log(updatedPerson)
console.log('new nums is', newNums)
const filterFunc = (...props) => {
  console.log('props are')

  return props.filter(element => element === 1)
}
var res = filterFunc(1, 2, 3, 4, 5)

const ghost = [1, 2, 3, 4, 5]
let num1 = 0,
  num2 = 0
;[num1, num2] = ghost

const multiply = numbers.map(tmp => {
  return tmp * 2
})
console.log(multiply) //(3) [32, 34, 36]
console.log(numbers) //(3) [32, 34, 36]
console.log('num1 ', num1, ' num2', num2)
console.log('res is', res)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Sonam /> */}
    </BrowserRouter>
  </React.StrictMode>
  //
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
