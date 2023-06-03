import { useEffect, useState } from "react";
import { IToDo } from "../models/todo-item";
import { useNavigate, useParams } from "react-router-dom";

interface IComponentProps {
  todos: IToDo[];
}

export const ItemDescription = ({ todos }: IComponentProps) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<IToDo>();

    useEffect(
        () => {
            const searchTodo = todos.find((todo)=>String(todo.id) === id)
            if (searchTodo){
                setTodo(searchTodo)
            }else{
                navigate('/404')
            }
        }
    )

  return (
    <div className="component">
      <h1> {todo?.text} </h1>
    </div>
  );
};
