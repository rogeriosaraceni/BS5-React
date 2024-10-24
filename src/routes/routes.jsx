import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../App.jsx'
import { Home } from '../pages/Home.jsx'
import { About } from '../pages/About.jsx'
import { NotFound } from '../pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

export function AppRoutes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
