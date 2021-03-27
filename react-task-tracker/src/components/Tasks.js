import { useState } from 'react'

const Tasks = () => {
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
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
