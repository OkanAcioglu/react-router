import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import StyledNavbar from '../components/StyledNavbar'

//! Now our active link gets different styling...
//! Why is happening is that by default if we use that NavLink, react-router adds the class of active to it. If we setup a active class and if we use NavLink the class will be automatically added.

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  )
}
export default SharedLayout
