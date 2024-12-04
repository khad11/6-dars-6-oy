import { useEffect, useState } from "react";

function Modal({ todo, editeTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    editeTodos({
      id: todo.id,
      title,
      description,
    });

    document.getElementById("my_modal_1").close();
  };
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
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
          <span className="label-text">Description:</span>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Description:"
            value={description}
          ></textarea>
          <div className="modal-action">
            <button className="btn btn-primary text-white">submit</button>
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("my_modal_1").close()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
export default Modal;
