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
  //! If we want to nest some routes inside of another we need to go with parent route and decide which routes we wanna setup in there.
  //! Key point when nesting routes where whatever we have here as a parent will be the main route and whatever is inside is going to be "/" + whatever path is over here.
  //! Problem is when we go to the ..URL/about we only see the homepage. To fix this we need use outlet inside of the Home component.
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
