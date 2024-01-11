import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(blog),
      },
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="">Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label htmlFor="">Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
