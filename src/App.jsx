import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import MainLayout from "./layouts/MainLayout";

//pages
import Home from "./pages/Home";
import Create from "./pages/Create";

// use state
import { useEffect, useState } from "react";
import ReadTodo from "./pages/readTodo";

// local storagedan malumotni olish
const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // delete
  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  // edit todos
  const editeTodos = (t) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id == t.id) {
          return {
            ...t,
          };
        } else {
          return todo;
        }
      });
    });
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Home
              todos={todos}
              deleteTodo={deleteTodo}
              editeTodos={editeTodos}
            />
          ),
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
        {
          path: "/read/:id",
          element: <ReadTodo todos={todos} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
