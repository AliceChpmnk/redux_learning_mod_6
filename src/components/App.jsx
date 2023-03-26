import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
   // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      <TaskList />
    </Layout>
  );
};

