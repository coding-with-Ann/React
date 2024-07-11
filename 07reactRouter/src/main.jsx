import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}/>
          {/* to accept userid in userpage we need to accept it in userpage using useParams */}
          {/* this is used to make the page dynamic(accept different users) */}
      </Route>
      <Route 
      loader={githubInfoLoader}   // **** it does advanced preprocessing on githubInfoLoader method
      path='github' 
      element={<Github/>}/>
      <Route path='*' element={<div>Not found</div>}/>
      * indicates 404(page not found), when page is not found it displays Not found
    </Route>
  )
)
// link and Route can be self clossing and sometimes not depends on usecase like above 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
