import {Header,Footer} from './components/index.js'
import {HomePage,AboutPage} from './pages/index.js'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage/>
        {/* <AboutPage/> */}
      </main>
      <Footer />
    </>
  )
}

/* Made By Dualis */