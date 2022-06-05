import './Toolbar.css'
import ToolbarButton from './ToolbarButton'
const Toolbar = props => {
  return (
    <div className='toolbar row'>
      <div className='col-xs-3'>
        <ToolbarButton text='REGISTER' url='/register' />
      </div>
      <div className='col-xs-3'>
        <ToolbarButton text='LOGIN' url='/login' />
      </div>
      <div className='col-xs-3'>
        <ToolbarButton text='OPERATIONS' url='/operations' />
      </div>
      <div className='col-xs-3'>
        <ToolbarButton text='HOME' url='/' />
      </div>
    </div>
  )
}
export default Toolbar
