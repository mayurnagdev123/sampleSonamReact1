import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import '../Toolbar/Toolbar.css'
import { registerUser, withRouter } from '../util/util'
import { useNavigate } from 'react-router-dom'

const Register = props => {
  useEffect(() => {
    console.log('useEffect register', props)
  }, [props])
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [authority, setAuthority] = useState('user')
  const [showSpinner, setShowSpinner] = useState(false)
  const [response, setResponse] = useState(null)
  const routerNavigator = useNavigate()
  function changeUsernameHandler (event) {
    event.preventDefault()
    console.log('username being changed', event.target.value)
    setUsername(event.target.value)
  }
  function changePasswordHandler (event) {
    event.preventDefault()

    console.log('password being changed', event.target.value)
    setPassword(event.target.value)
  }
  function formSubmitHandler (event) {
    event.preventDefault()
    setShowSpinner(true)
    setResponse(null)
    registerUser(username, password, authority, function (status, response) {
      console.log('response is', response, status)
      setShowSpinner(false)
      let updatedResponse = response
      if (status) {
        updatedResponse = response + " You'll be redirected to login shortly..."
        setTimeout(function redirect () {
          routerNavigator('/login')
        }, 2000)
      }
      setResponse(updatedResponse)
    })
  }
  function authorityChangedHandler (event) {
    event.preventDefault()
    setAuthority(event.target.value)
  }
  return (
    <div>
      <h2 className='text-center'>REGISTRATION PAGE</h2>
      {showSpinner ? (
        <Spinner />
      ) : (
        <form
          style={{ padding: '20px', width: '50%' }}
          onSubmit={formSubmitHandler}
        >
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              required
              onChange={changeUsernameHandler}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='name'>Password</label>
            <input
              type='password'
              className='form-control'
              required
              onChange={changePasswordHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='authority'>Authority</label>
            <select
              className='form-control'
              aria-label='Select User Authority'
              defaultValue='user'
              onChange={authorityChangedHandler}
            >
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
            </select>
          </div>

          <button type='submit' className='btn formButtons'>
            REGISTER
          </button>
        </form>
      )}
      <h4 className='text-center'>{response}</h4>
    </div>
  )
}
export default withRouter(Register)
