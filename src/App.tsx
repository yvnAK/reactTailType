import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {

  return (
    <main className="py-10 h-screen space-y-5">
      {/* main class now has a vertical (y) padding of 10, and takes up the height of the screen */}
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {/* here, we're putting in js logic. the caveat is that it needs to return html code */}
          {dummyData.map(todo => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
