import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Make A Bot To Attend Online Class',
        day: 'Monday',
        reminder: true
        },
        {
            id: 2,
            text: 'Homework',
            day: 'Tuesday',
            reminder: true
        },
        {
            id: 3,
            text: 'Finish Website',
            day: 'Wednesday',
            reminder: true
        }
    ])

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
      <Header />
      {DataTransferItemList.lenght > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ( "No Tasks To Show" )}
    </div>
  );
}

export default App;