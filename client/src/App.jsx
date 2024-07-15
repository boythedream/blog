import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Register from './pages/Register'
import Myblogs from './pages/Myblogs'
import { Toaster } from 'react-hot-toast';
import CreateBlog from './pages/CreateBlog'
import BlogDetails from './pages/BlogDetails'

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/myblogs' element={<Myblogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blog-details/:id' element={<BlogDetails />} />
      </Routes>
    </>
  )
}

export default App