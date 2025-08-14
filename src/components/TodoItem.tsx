import type { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
}

// naming convention of components is PascalCase
export default function TodoItem({todo}: TodoItemProps){
    // I don't understand this right now and will need AI help to explain each component and create some examples. 
    // This is in the "Components & props explained" part of the video
    return(
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox" className="scale-125"/>
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}
