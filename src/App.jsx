import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import MainLayout from "./layouts/MainLayout";

//pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import { useEffect, useState } from "react";

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

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home todos={todos} deleteTodo={deleteTodo} />,
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
