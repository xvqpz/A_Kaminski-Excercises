import './App.css'
import CreateTask from './components/CreateTask'
import Task from './components/Task'

function App() {


  return (
    <>
    <div className='border-2 border-black w-[27rem] h-[30rem] px-2'>
      <CreateTask></CreateTask>
      <Task></Task>
    </div>
    </>
  )
}

export default App
