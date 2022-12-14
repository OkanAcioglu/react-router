//! we will grab 3 components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//! we can add "BrowserRouter" in the "index.js" where we wrap the whole application.
//! "BrowserRouter" is connect to the browser.
//! "Routes" going to be a parent for all our "Route"
//! Then for every page we will setup a "Route" component with two props that are "path" that is what is going to be URL and "element" that what we want to render.
//! When it comes to the home page, we have special syntax that is "/". That is in production that is going to be whatever is our domain
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
//? We can also pass the component directly instead of hardcoding.
//? Whatever we have in the component will be the content of the page.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        {/* moment that if a user by mistake types a path that does not exist app will display nothing. In order to handle this we setup a error page. We will use "*" that is if the app cannot find anythink related to other pages, then this will collect all of them  */}
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
