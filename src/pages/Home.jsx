import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function Home({ todos, deleteTodo }) {
  return (
    <>
      <div className="mx-auto my-10 max-w-5xl">
        <ul className="grid grid-cols-3 gap-5">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="card w-full bg-primary text-primary-content"
              >
                <div className="card-body">
                  <h2 className="card-title capitalize text-teal-50">
                    {todo.title}
                  </h2>
                  <p className="text-white">
                    {" "}
                    {todo.description.slice(0, 50)}...
                  </p>
                  <div className="card-actions items-center justify-end gap-3">
                    <Link className="btn btn-sm">Read More</Link>
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
