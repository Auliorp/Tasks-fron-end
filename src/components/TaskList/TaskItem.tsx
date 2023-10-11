import { useTasks } from "../../context/useTasks";
import { Task } from "../../interfaces/task.interface";
import { IoCheckmarkCircleOutline, IoTrashSharp } from "react-icons/io5";

interface Props {
   task: Task;
}

function TaskItem({ task }: Props) {
   const { deleteTask, updateTask } = useTasks();
   return (
      <div
         key={task._id}
         className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
      >
         <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
         </div>
         <div className="flex gap-x-3">
            {task.done ? (
               <IoCheckmarkCircleOutline
                  className="text-green-500"
                  onClick={async () => {
                     await updateTask(task._id, {
                        done: !task.done,
                     });
                  }}
               />
            ) : (
               <IoCheckmarkCircleOutline
                  className="text-gray-500"
                  onClick={async () => {
                     await updateTask(task._id, {
                        done: !task.done,
                     });
                  }}
               />
            )}

            <IoTrashSharp
               onClick={async () => {
                  if (
                     !window.confirm(
                        "Estas seguro de que quieres eliminar esta tarea"
                     )
                  )
                     return;
                  await deleteTask(task._id);
               }}
            />
         </div>
      </div>
   );
}

export default TaskItem;
