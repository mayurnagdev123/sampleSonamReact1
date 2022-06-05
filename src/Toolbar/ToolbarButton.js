import './Toolbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function ToolbarButton (props) {
  const [url, setUrl] = useState(null)
  useEffect(() => {
    setUrl(props.url)
  }, [props])
  return (
    <div>
      {url ? (
        <Link to={{ pathname: url }}>
          <button className='btn btn-block toolbarBtn'>{props.text}</button>
        </Link>
      ) : null}
    </div>
  )
}
export default ToolbarButton
