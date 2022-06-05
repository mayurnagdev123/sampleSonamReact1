import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

let axios_instance = axios.create({
  baseURL: 'http://localhost:8282/',
  withCredentials: true,
  headers: { 'content-type': 'application/json' }
})
let new_axios_instance = axios.create({
  baseURL: 'http://localhost:8282/',
  withCredentials: true,
  headers: { 'content-type': 'application/json' }
})
export async function registerUser (username, password, authority, callback) {
  new_axios_instance
    .post('/public/register', {
      username: username,
      password: password,
      authority: authority
    })
    .then(res => {
      console.log('successfully added', res)
      callback(true, res.data)
    })
    .catch(err => {
      console.log('failed to add user', err)
      callback(false, err.message)
    })
}

export async function register (username, password, callback) {
  console.log('rsgiter called')

  axios_instance
    .post('/public/register', {
      username: username,
      password: password
    })
    .then(res => {
      console.log('response is', res)
      callback(res.data)
    })
    .catch(err => {
      console.log('error is', err)
      callback(err.message)
    })
}
export async function login (username, password, callback) {
  axios_instance
    .post('/public/login', {
      username: username,
      password: password
    })
    .then(res => {
      console.log(res)
      callback(res.data)
    })
    .catch(err => {
      console.log(err)
      callback(err.message)
    })
}
export async function loginUser (username, password, callback) {
  axios_instance
    .post('/public/login', {
      username: username,
      password: password
    })
    .then(res => {
      console.log('login response is:', res)
      callback(true, res.data)
    })
    .catch(err => {
      console.log('error is', err)
      callback(false, err.message)
    })
}
export async function testSecuredEndpoint (callback) {
  axios_instance
    .get('/protected/test')
    .then(res => {
      console.log('successsful', res)
      callback(true, res)
    })
    .catch(err => {
      console.log('failed', err)
      callback(false, err)
    })
}

export async function registerWithFetch (username, password, oallback) {
  console.log('fetch called')
  const data = { username: username, password: password }
  fetch('http://localhost:8282/public/register', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      JSON.parse(JSON.stringify(error))
      console.log(error)
    })
}
export function withRouter (Child) {
  return props => {
    const location = useLocation()
    const navigate = useNavigate()
    return <Child {...props} navigate={navigate} location={location} />
  }
}

export async function getAllUserBooks (callback) {
  axios_instance
    .get('/protected/getAllBooks')
    .then(res => {
      console.log('all books fetched')
      console.log(res)
      console.log(res.data)
      callback(res.data)
    })
    .catch(err => {
      console.log('error encountered fetching books')
      console.log(err)
      callback(err.message)
    })
}
