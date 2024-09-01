import { useState } from 'react'
import { Outlet } from 'react-router-dom';

export default function TaskLayout()
{
    const tasksArray = [
        {
            id: 1,
            task: "Complete homework",
            date: new Date().toLocaleDateString(),
        },
        {
            id: 2,
            task: "Walk",
            date: new Date().toLocaleDateString(),
        },
    ];

    const [tasks, setTasks] = useState(tasksArray);

    return (
        <Outlet context={[tasks, setTasks]}/>
    );
}