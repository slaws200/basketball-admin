import {MainLayout} from '@widgets/layout/MainLayout/MainLayout'
import { Roster } from '@widgets/layout/Roster/Roster'
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.main}>
      <MainLayout children={<Roster />}>

      </MainLayout>
      {/* <NotFoundPage title='Page not found' description="Sorry, we can’t find what you’re looking for"></NotFoundPage> */}
    </div>
  )
}

export default App
