import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../stores/slice/todo.slice";
import type { StoreType } from "../stores";

const TodoList: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const todos = useSelector((state: StoreType) => state.todoStore.todos);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Danh sách công việc (TypeScript Version)</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          placeholder="Nhập việc cần làm..."
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />
        <button
          onClick={handleAddTodo}
          style={{ padding: "8px 15px", cursor: "pointer" }}
        >
          Thêm
        </button>
      </div>

      <ul>
        {todos.length > 0 ? (
          todos.map((todo: string, index: number) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {todo}
            </li>
          ))
        ) : (
          <p style={{ color: "gray" }}>Chưa có công việc nào. Hãy thêm mới!</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
