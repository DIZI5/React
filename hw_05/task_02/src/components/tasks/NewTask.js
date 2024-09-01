import { useOutletContext } from "react-router-dom";

export default function NewTask()
{
    function submit(e)
    {
        e.preventDefault();

        const input = document.querySelector("input");
        const newTask = {
            id: tasks.length + 1 || 1,
            task: input.value,
            date: new Date().toLocaleDateString()
        }

        if (newTask.task !== "")
        {
            setTasks([...tasks, newTask]);
            input.value = "";
        }
    }

    const [tasks, setTasks] = useOutletContext();

    return (
        <form onSubmit={submit}>
            <input placeholder="Enter a new task"/>
            <button className="attached">Add task</button>
        </form>
    );
}