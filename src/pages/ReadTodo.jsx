import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReadTodo({ todos }) {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    setTodo(todos.find((t) => t.id == Number(id)));
  }, [id]);

  return (
    <div className="h-auto">
      {todo && (
        <>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-5 mt-10 text-4xl font-bold uppercase">
              {todo.title}
            </h1>
            <p className="mb-5 text-xl font-medium">{todo.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ReadTodo;
