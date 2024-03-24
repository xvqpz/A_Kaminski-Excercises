import Scaffolding from './components/Scaffolding';
import './App.css'
import CreateTask from './components/CreateTask'
import Task from './components/Task'

function App() {


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-black w-[33rem] h-[30rem] px-2 rounded-md bg-orange-500 ">
        <CreateTask />
        <Task />
        <Scaffolding task="Bahuras" priority="Low"/>
      </div>
    </div>
  );
}

export default App
