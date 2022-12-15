//! There is special component that we can grab from the react-router-dom is NavLink is that in style and also in className we can pass in the function where there is a property by the name of "isActive" and based on that we can setup some type of styling.

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  )
}

export default NavBar

//? Approach 1...
// const NavBar = () => {
//   return (
//     <nav className='navbar'>
//       <NavLink
//         to='/'
//         //! Note that below is a function and in order to work both parameter and return must be in curly braces.
//         //! Also we can add whatever we want in the function.
//         style={({ isActive }) => {
//           return { color: isActive ? 'red' : 'grey' }
//         }}
//       >
//         Home
//       </NavLink>
//       <NavLink to='/about'>About</NavLink>
//       <NavLink to='/products'>Products</NavLink>
//     </nav>
//   )
// }
