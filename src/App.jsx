import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Navigation } from '@partials/Navigation'
import { Outlet } from 'react-router-dom'
import { Footer } from '@partials/Footer'

function App() {
  return (
    <>
      <Navigation />

      <section className='container'>
        <h1>App</h1>

        <main>
          <Outlet />
        </main>
      </section>

      <Footer />
    </>
  )
}

export default App
