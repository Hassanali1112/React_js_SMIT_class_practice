import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Users from './Pages/Users.jsx'
import UserDetails from './Pages/UserDetails.jsx'
import NotFound from './Pages/NotFound.jsx'
import { UsersContext } from './UsersContext/context.js'
import ContextProvider from './UsersContext/ContextProvider.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
