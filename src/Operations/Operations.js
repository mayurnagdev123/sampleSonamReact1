import { useEffect, useState } from 'react'
import { getAllUserBooks, testSecuredEndpoint } from '../util/util'
import { useNavigate } from 'react-router-dom'
import '../Toolbar/Toolbar.css'
import ShowBook from '../ShowBook/ShowBook'
const Operations = props => {
  const navigator = useNavigate()
  const [error, setError] = useState(null)
  const [allBooks, setAllBooks] = useState([])
  const [requestMade, setRequestMade] = useState(false)
  useEffect(() => {
    testSecuredEndpoint(function (status, testResponse) {
      console.log('test response is', testResponse)
      if (!status) {
        setError(
          'You are not authorized to view this page. Please login to continue'
        )
        setTimeout(function redirectToLogin () {
          navigator('/login')
        }, 3000)
      }
    })
    console.log('operations use effect')
  }, [props, navigator])
  function getAllBooks () {
    setRequestMade(false)
    getAllUserBooks(function (response) {
      console.log('callback response is', response)
      setRequestMade(true)
      let newArr = []
      for (let i = 0; i < response.length; i++) {
        newArr.push(response[i])
      }
      if (newArr.length === response.length) {
        setAllBooks(newArr)
        console.log('new Arr is', newArr)
      }
    })
  }
  return (
    <div>
      <h2 className='text-center'>OPERATIONS PAGE</h2>
      <div className='row'>
        <div className='col-xs-4' style={{ border: '2px solid black' }}>
          <button className='btn formButtons btn-block'>ADD A BOOK</button>
        </div>
        <div className='col-xs-4' style={{ border: '2px solid black' }}>
          <button className='btn formButtons btn-block' onClick={getAllBooks}>
            GET ALL BOOKS
          </button>
          {requestMade ? (
            allBooks.length > 0 ? (
              <ShowBook books={allBooks} />
            ) : (
              <h2>You do not have any books</h2>
            )
          ) : null}
        </div>
        <div className='col-xs-4' style={{ border: '2px solid black' }}>
          {' '}
          <button className='btn formButtons btn-block'>DELETE A BOOK</button>
        </div>
      </div>
      <h4 className='text-center'>{error}</h4>
    </div>
  )
}
export default Operations
