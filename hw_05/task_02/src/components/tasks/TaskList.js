import { Outlet, useOutletContext } from "react-router-dom";
import NewTask from "./NewTask";

export default function TaskList()
{   
    function MarkAsDoneOrToDo(id)
    {
        const tr = document.getElementById(`task_${id}_tr`);
        const btn = document.getElementById(`task_${id}_btn`);

        if (tr.className === "todo")
        {
            tr.className = "done";
            btn.innerText = "ToDo";
        }
        else
        {
            tr.className = "todo";
            btn.innerText = "Done";
        }
    }

    function DeleteTask(id)
    {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const [tasks, setTasks] = useOutletContext();
    
    return (
        <div>
            <Outlet context = {[tasks, setTasks]}/>
            <div>
                <h1>Task List</h1>
            </div>

            <div>
                <NewTask/>
            </div>

            <div>
                <h2>Todo:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Mark as done</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map((task) => {
                            return (
                                <tr id={`task_${task.id}_tr`} key={task.id} className="todo">
                                        <td className="task-title">
                                            { task.task}
                                        </td>

                                        <td className="task-date">
                                            {task.date}
                                        </td>

                                        <td>
                                            <button id={`task_${task.id}_btn`} onClick={() => MarkAsDoneOrToDo(task.id)}>Done</button>
                                        </td>

                                        <td>
                                            <button id={`task_${task.id}_delete`} onClick={() => DeleteTask(task.id)}>Delete</button>
                                        </td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}