import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/index.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ProfilPage from './pages/profil.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import AdminPage from './pages/admin.jsx'
import FormUpdateProduct from './components/Fragments/FormUpdateProduct.jsx'



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
  },
  {
    path:"/admin",
    element: <AdminPage></AdminPage>
  },
  {
    path:"/admin",
    element: <AdminPage></AdminPage>
  },
  {
    path:"/update/:id",
    element: <FormUpdateProduct></FormUpdateProduct>
  }

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
