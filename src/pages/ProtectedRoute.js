//! Lets see how we can restrict access to certain routes.
//! For that in pages we create that component (ProtectedRoute) and in App.js we will wrap whatever page we want to restrict access to in that ProtectedRoute
//! It doesnt really matter what we display here since the logic is going to change
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, user }) => {
  //! if the user does not exist use Navigate component and write where we wanna navigate
  if (!user) {
    return <Navigate to='/' />
  }
  //! Dashboard page
  return children
}
export default ProtectedRoute
