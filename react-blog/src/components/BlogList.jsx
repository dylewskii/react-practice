/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Authored by: {blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
