import logo from './logo.svg'
import './App.css'
import { useRef, useState } from 'react'
import { register, registerWithFetch } from './util/util'
import Spinner from './Spinner/Spinner'
import Toolbar from './Toolbar/Toolbar'
import { Routes, Route } from 'react-router-dom'
import Operations from './Operations/Operations'
import Register from './Register/Register'
import Login from './Login/Login'
import Home from './Home/Home'

function App () {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const responseRef = useRef()
  const [showSpinner, setShowSpinner] = useState(false)
  function registerUser (e) {
    e.preventDefault()
    console.log('trying to submit form')
    var username = usernameRef.current.value
    console.log(usernameRef.current)
    var password = passwordRef.current.value
    setShowSpinner(true)
    register(username, password, function (response) {
      setShowSpinner(false)
      responseRef.current.innerHTML = response
    })
  }

  return (
    <div>
      <Toolbar />
      <div style={{ marginTop: '100px' }}>
        <Routes>
          <Route path='/operations' element={<Operations />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route
            path='*'
            element={
              <div className='text-center'>
                <h2>PAGE NOT FOUND :(</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
    // <div>
    //   <h1>Register User</h1>
    //   <form onSubmit={registerUser}>
    //     <div className='form-group'>
    //       <label htmlFor='username'>username</label>
    //       <input
    //         type='text'
    //         className='form-control'
    //         ref={usernameRef}
    //         required
    //       />
    //     </div>

    //     <div className='form-group'>
    //       <label htmlFor='name'>Password</label>
    //       <input
    //         type='password'
    //         className='form-control'
    //         ref={passwordRef}
    //         required
    //       />
    //     </div>

    //     <button type='submit' className='btn btn-primary'>
    //       REGISTER
    //     </button>
    //   </form>
    //   <h1 ref={responseRef}></h1>
    //   {showSpinner ? <Spinner /> : null}
    // </div>
  )
}

export default App
