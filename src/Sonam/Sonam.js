import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
const Sonam = props => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('[Sonam]useEffect')
    if (count == 10) setLoading(false)
  }, [loading])

  useEffect(() => {
    console.log('[Sonam]countUseEffect')
  }, [count])
  function incrementCount () {
    console.log('increment count is called')
    // setCount(madar => {
    //   return madar + 1
    // })
    setCount(count + 1)
  }
  function decrementCount () {
    console.log('decrement count is called')
    setCount(count - 1)
  }
  return (
    <div>
      <h2>Sonam is learning react</h2>
      <h2>count is : {count}</h2>

      <button className='button btn-success' onClick={incrementCount}>
        Increment count
      </button>
      <button className='button  btn-success' onClick={decrementCount}>
        Decrement count
      </button>
      {loading ? <Spinner /> : null}
    </div>
  )
}
export default Sonam
