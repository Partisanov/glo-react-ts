import { Link } from "react-router-dom";
import { IToDo } from "../../models/todo-item";
import cn from "./ListItem.module.scss"

export const ListItem = ({ todo }: { todo: IToDo }) => (
  <Link className={`${cn.link} todo.isDone ? cn.done : cn.notDone`} to={`/list/${todo.id}`}>{todo.text}</Link>
);
