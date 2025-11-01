import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LuListTodo } from "react-icons/lu";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function MainPlayToDo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Like ❤️", completed: false },
    { id: 2, text: "Serch Pokemon ⚡️", completed: false },
  ]);
  const [input, setInput] = useState("");
  console.log(todos);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved && saved.length < 0) setTodos(JSON.parse(saved));
  }, []);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = { id: Date.now(), text: input.trim(), completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    const updateDoto = todos.filter((t) => t.id !== id);
    setTodos(updateDoto);
    localStorage.setItem("todos", JSON.stringify(updateDoto));
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-200">
      <h2 className="text-2xl font-bold  mb-4 flex items-center gap-5">
        <LuListTodo color="#16A34A" />
        To-Do List
      </h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add new task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          style={{ background: "#16A34A" }}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2 h-40">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ✕
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
