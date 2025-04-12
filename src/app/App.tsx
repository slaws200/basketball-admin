import { Input } from '../shared/ui/Input/Input'
import Search from '../shared/ui/Search/Search'
import { Button } from '../shared/ui/Button/Button'
import { Notification } from '../shared/ui/Notification/Notification'
import { Checkbox } from '../shared/ui/Checkbox/Checkbox'
import styles from './App.module.css'

function App() {

  return (
    <>
      <div className={styles.main}>
        <Button variant='primary' text='Sign in'/>
        <Button variant='primary' text='Add +'/>
        <Notification text={'Something went wrong...'}/>
        <Checkbox label='Text'/>
        <Checkbox label='Text' disabled checked/>
        <Checkbox label='Text' disabled/>
        <Checkbox label='Text'/>
        <Checkbox label='Text' error='String'/>
        <Checkbox label='Text' error='String very-very-very-very-very-very long'/>
      </div>
    </>
  )
}

export default App
