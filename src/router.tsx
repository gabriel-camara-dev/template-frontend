import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { DefaultLayout } from './layouts/defaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
])
