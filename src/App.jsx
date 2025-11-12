import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Blog from './pages/Blog.jsx'
import Layout from './pages/admin/Layout.jsx';
import LoginPage from './pages/admin/LoginPage.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import AddBlog from './pages/admin/AddBlog.jsx';
import ManageComments from './pages/admin/ManageComments.jsx';
import ListBlog from './pages/admin/ListBlog.jsx';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext.jsx';

function App() {
  const {token} = useAppContext();

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/blog/:id`} element={<Blog/>} />
        <Route path='/admin' element={token ? <Layout/> : <LoginPage/>} >
          <Route index element={<Dashboard/>} />
          <Route path="addblogs" element={<AddBlog/>} />
          <Route path='comments' element={<ManageComments/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='bloglists' element={<ListBlog/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
