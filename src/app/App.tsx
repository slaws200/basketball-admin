import { Sidebar } from '@widgets/layout/Sidebar/Sidebar'
import { NavBar } from '@shared/ui/NavBar/NavBar'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.main}>
      <NavBar name="Alex Smith"/>
      <Sidebar/>
    </div>
  )
}

export default App
