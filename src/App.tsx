import { useState } from "react";
import { Header } from "./components/Header";
import { InputWrapper } from "./components/InputWrapper";
import { ListWrapper } from "./components/ListWrapper";
import { v4 as uuidv4 } from "uuid";

interface PropsNewTasks {
  id: string;
  name: string;
  completed: boolean;
}

export const App = () => {
  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<PropsNewTasks[]>([]);
  const countTask = tasks.length;

  const handleCreateNewTask = () => {
    if (text !== "") {
      const newTask: PropsNewTasks = {
        id: uuidv4(),
        name: text,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      console.log(tasks);
    }
    setText("");
  };

  const deleteTasks = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <Header />
      <InputWrapper
        nameTask={text}
        setNameTask={setText}
        createTask={handleCreateNewTask}
      />
      <ListWrapper tasks={tasks} delTask={deleteTasks} countTasks={countTask} />
    </>
  );
};
