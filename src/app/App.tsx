import { Input } from '../shared/ui/Input/Input'
import Search from '../shared/ui/Search/Search'
import { Button } from '../shared/ui/Button/Button'
import styles from './App.module.css'

function App() {

  return (
    <>
      <div className={styles.main}>
        <Button variant='primary' text='Sign in'/>
        <Button variant='primary' text='Sign in' disabled={true}/>
        <Button variant='secondary' text='Cancel'/>
        <Button variant='secondary' text='Cancel' disabled/>
      </div>
    </>
  )
}

export default App
