//! For now only way of passing page to page is using the URL bar which is not a best user experience
//! Unlike traditional multipage applications where we use "a" , in this case if we wanna navigate around the project we wanna grab the "Link" component from react.
//! Note that if we wanna go somewhere externally we still need to use "a"
//! "Link" component looking for one thing and it is "to" prop and we just pass the url. We do not need to go full URL just go with "/" and the whatever we want in the app
//! Note that "path" and "to" props are need to be match.

import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
//? We need import and display this Outlet component and whatever we will setup around this outlet is gonna be the shared layout across the pages that are nested inside of the parent and then actual page content will be displayed here in the outlet one.
const Home = () => {
  return (
    <>
      <NavBar />
      <section className='section'>
        {/* ! So if Home Page is shared all across the nested pages we can setup NavBar */}
        <Outlet />
      </section>
    </>
  )
}
export default Home
