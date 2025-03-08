import { useState } from "react";

export interface Todo {
  id: number;
  title: string;
  check: boolean;
}

export const useTodos = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submit = () => {
    if (value.trim() === "") return;
    console.log("submit", value);

    setTodos([...todos, { id: Date.now(), title: value, check: false }]);
    erase();
  };

  const erase = () => {
    setValue("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submit();
    } else if (event.key === "Escape") {
      erase();
    }
  };

  const onToggle = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((obj) =>
        obj.id === todo.id ? { ...obj, check: !todo.check } : obj
      )
    );
    console.log("toggle", todos);
  };

  const onRemove = (todo : Todo) => {
        setTodos(todos.filter((obj) => obj.id != todo.id));
  }
  return {
    value,
    todos,
    onChange,
    submit,
    erase,
    onKeyDown,
    onToggle,
    onRemove,
  };
};
