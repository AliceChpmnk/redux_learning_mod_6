import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

// Імпортуємо хук
import { useSelector } from "react-redux";
// Імпортуємо об'єкт значень фільтра
import { selectVisibleTasks } from "../../redux/selectors";

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(selectVisibleTasks);
  
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};