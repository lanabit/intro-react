import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/index.jsx';
import Contact from './pages/contact/index.jsx';
import Works from './pages/works/index.jsx';
const myRouter = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: '/',
      element: (
      <>
      <HomePage />
      </>
      )
    },
    {
      path: '/contact-me',
      element: 
      <>
      <Contact></Contact>
      </>
    },
    {
      path: '/works',
      element: 
      <>
      <Works></Works>
      </>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {myRouter} />
  </React.StrictMode>,
)
