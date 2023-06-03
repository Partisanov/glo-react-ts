import { ListItem } from "../components/ListItem/ListItem"
import { IToDo } from "../models/todo-item"

interface IComponentProps {
    todos: IToDo[]
}

export const HomePage = (props:IComponentProps) => {
    return (
        <div className="container">
        {
            props.todos.map((todo, idx:number)=>(
                <ListItem todo={todo} key={idx}/>
        ))}
    </div>
    )
}