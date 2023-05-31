import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { IToDo } from "../models/todo-item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const createNewToDo = (text: string) => {
    const newToDo: IToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
    toast.success(`Добавлено дело: ${text}`);
  };
  const updateToDo = (todoItem: IToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
    if(todoItem.isDone){
      toast.info(`Выполнено: ${todoItem.text}`);
    }else{
      toast.warn(`Нужно выполнить: ${todoItem.text}`);
    }
    
  };
  const deleteToDo = (todoItem: IToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== todoItem.id);
    setTodos(newTodos);
    toast.error(`Удалено дело: ${todoItem.text}`);
  };

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
