import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/index.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage></HomePage>
  },
  {
    path:"/login",
    element: <LoginPage></LoginPage>
  },
  {
    path:"/register",
    element: <RegisterPage></RegisterPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
