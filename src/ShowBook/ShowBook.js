import { useEffect, useState } from 'react'

const ShowBook = props => {
  //  const [allBooks, setAllBooks] = useState([])
  const [books, setBooks] = useState(null)
  const [bookArr, setBookArr] = useState([])
  useEffect(() => {
    console.log('[ShowAllBooks]', props.books)
    if (props?.books) setBooks(props.books)
  }, [props])

  useEffect(() => {
    console.log('hi from useEffect 2', books)
    let bookArr = []
    if (books != null && books.length > 0) {
      for (let i = 0; i < books.length; i++) {
        bookArr.push(
          <tbody key={books[i].id}>
            <tr>
              <td>{books[i]?.id}</td>
              <td>{books[i]?.name}</td>
              <td>{books[i]?.author}</td>
            </tr>
          </tbody>
        )
      } //for
      if (bookArr.length > 0) {
        console.log('setting book arr', bookArr)
        setBookArr(bookArr)
      }
    }
  }, [books])
  return <table className='table table-striped table-bordered'>{bookArr}</table>
}
export default ShowBook
