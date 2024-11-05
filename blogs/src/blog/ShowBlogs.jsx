import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const URI = "http://localhost:8000/blogs/";

function ShowBlogs() {
 const [blogs, setBlog] = useState([]);
      useEffect(() => {
        getBlogs();
      }, []);

      //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        try {
            const res = await axios.get(URI);
            setBlog(res.data);
        } catch (err) {
            console.log(err)
          }
      };

      //procedimineto para eliminar un blog
      const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`);
        getBlogs();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fas fa-plus">Create</i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td> {blog.title} </td>
                  <td> {blog.content} </td>
                  <td>
                    <Link to={`/edit/${blog.id}`}>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="btn btn-danger"
                    >
                      Delete<i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowBlogs
