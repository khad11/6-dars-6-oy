import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Create({ setTodos }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast.error("Siz ma'lumot qo'shishingiz kerak !!!");

      return;
    } else if (title.trim() || description.trim()) {
      toast.success("Ma'lumot muvaffaqqiyatli qo'shildi");
    }
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          title,
          description,
        },
      ];
    });
    navigate("/");
  };
  return (
    <div className="mx-auto my-10 w-96">
      <h2 className="mb-5 text-center text-5xl font-medium"> Add new ToDo</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-control mb-5 w-full">
          <div className="label">
            <span className="label-text">Title:</span>
          </div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter your ToDo"
            className="input input-bordered w-full"
            value={title}
          />
        </label>
        <label className="form-control mb-5 w-full">
          <div className="label">
            <span className="label-text">Description:</span>
          </div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Description:"
            value={description}
          ></textarea>
        </label>
        <button className="btn btn-primary btn-block">Add</button>
      </form>
    </div>
  );
}

export default Create;
