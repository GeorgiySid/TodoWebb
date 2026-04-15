import { ToastContainer } from 'react-toastify'

import { MainPage } from '../pages'
import './styles/index.css'

export const App = () => {
  return (
    <>
      <MainPage />
      <ToastContainer position='bottom-right' autoClose={2000} />
    </>
  )
}

App.displayName = 'App'
