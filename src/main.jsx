import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/index.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ProfilPage from './pages/profil.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginPage></LoginPage>
  },
  {
    path:"/register",
    element: <RegisterPage></RegisterPage>
  },
  {
    path:"/home",
    element: <HomePage></HomePage>
  },
  {
    path:"/profil",
    element: <ProfilPage></ProfilPage>
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
