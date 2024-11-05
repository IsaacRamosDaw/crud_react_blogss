import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowBlogs from './blog/ShowBlogs';
import CreateBlog from './blog/CreateBlog';
import EditBlog from './blog/EditBlog';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ShowBlogs />} />
        <Route path="/" element={<ShowBlogs />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
