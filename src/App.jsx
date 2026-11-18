import {Header,Footer} from './components/index.js'
import { Outlet } from 'react-router'
import ScrollToHash from './utils/ScrollToHash.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ScrollToHash/>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}
