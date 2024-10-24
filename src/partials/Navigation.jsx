import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <>
      <div className='navApp'>
        <section className='container'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
          </nav>
        </section>
      </div>
    </>
  )
}
