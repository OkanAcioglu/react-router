//! For now only way of passing page to page is using the URL bar which is not a best user experience
//! Unlike traditional multipage applications where we use "a" , in this case if we wanna navigate around the project we wanna grab the "Link" component from react.
//! Note that if we wanna go somewhere externally we still need to use "a"
//! "Link" component looking for one thing and it is "to" prop and we just pass the url. We do not need to go full URL just go with "/" and the whatever we want in the app
//! Note that "path" and "to" props are need to be match.
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link to='/about' className='btn'>
        About
      </Link>
    </section>
  )
}
export default Home
