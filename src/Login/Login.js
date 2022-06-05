import { useState } from 'react'
import '../Toolbar/Toolbar.css'
import { loginUser } from '../util/util'
import { useNavigate } from 'react-router-dom'
const Login = props => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [loginResponse, setLoginResponse] = useState(null)
  const navigator = useNavigate()

  function changeUsernameHandler (event) {
    setUsername(event.target.value)
  }
  function changePasswordHandler (event) {
    setPassword(event.target.value)
  }
  function formSubmitHandler (event) {
    setLoginResponse(null)
    event.preventDefault()
    console.log('[LOGIN] username and password is', username, '\t', password)

    loginUser(username, password, function (status, response) {
      console.log('callback response is', response)
      if (status) {
        setLoginResponse('successful')
        localStorage.setItem('jwt', response)
        setTimeout(function redirect () {
          navigator('/operations')
        }, 2000)
      } else setLoginResponse(response)
    })
  }
  return (
    <div>
      <h2 className='text-center'>LOGIN PAGE</h2>

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
          <label htmlFor='username'>Password</label>
          <input
            type='password'
            className='form-control'
            required
            onChange={changePasswordHandler}
          />
        </div>
        <button type='submit' className='btn formButtons'>
          REGISTER
        </button>
      </form>
      <h4 className='text-center'>{loginResponse}</h4>
    </div>
  )
}
export default Login
