import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Modal from "../components/Modal";
import { useState } from "react";

function Home({ todos, deleteTodo, editeTodos }) {
  const [todoId, setTodoId] = useState(null);
  const [todo, setTodo] = useState(null);

  return (
    <>
      <div className="mx-auto my-10 max-w-5xl">
        <ul className="grid grid-cols-3 gap-5">
          <Modal todo={todo} editeTodos={editeTodos} />
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="card w-full bg-primary text-primary-content"
              >
                <div className="card-body">
                  <button
                    onClick={() => {
                      setTodo(todo);
                      setTodoId(todo.id);
                      document.getElementById("my_modal_1").showModal();
                    }}
                    className="flex justify-end text-2xl text-white"
                  >
                    <CiEdit />
                  </button>
                  <h2 className="card-title capitalize text-teal-50">
                    {todo.title}
                  </h2>
                  <p className="text-white">
                    {todo.description.slice(0, 50)}...
                  </p>
                  <div className="card-actions items-center justify-end gap-3">
                    <Link to={`/read/${todo.id}`} className="btn btn-sm">
                      Read More
                    </Link>
                    <button
                      className="text-2xl"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
