import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from "react-router";
// import Blog from './pages/Blog.jsx';
// import LoginPage from './pages/admin/LoginPage.jsx';
// import AddBlog from './pages/admin/AddBlog.jsx';
// import ManageComments from './pages/admin/ManageComments.jsx';
// import Dashboard from './pages/admin/Dashboard.jsx';
// import ListBlog from './pages/admin/ListBlog.jsx';
// import Layout from './pages/admin/Layout.jsx';
import { AppProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <App/>
    </AppProvider>
  </BrowserRouter>
)
