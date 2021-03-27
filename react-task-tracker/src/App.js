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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;