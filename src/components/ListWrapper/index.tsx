import { Container } from "./input-wrapper";
import { HeaderList } from "./input-wrapper";
import { ListTask } from "./input-wrapper";
import { GoTrash } from "react-icons/go";
import { VoidList } from "../VoidList";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface ListWrapProps {
  tasks: Task[];
  delTask: (id: string) => void;
  countTasks: number;
}

export const ListWrapper = ({ tasks, delTask, countTasks }: ListWrapProps) => {
  return (
    <Container>
      <HeaderList>
        <div className="status-create-task">
          <p>Tarefas Criadas</p>
          <span>{countTasks}</span>
        </div>

        <div className="status-conclued-task">
          <p>Concluídas</p>
          <span>0/{countTasks} </span>
        </div>
      </HeaderList>

      <ListTask>
        <ul>
          {tasks.map((task) => {
            if (tasks.length > 0) {
              return (
                <li key={task.id}>
                  <div>
                    <input type="checkbox" />
                    <p>{task.name}</p>
                  </div>
                  <button onClick={() => delTask(task.id)}>
                    <GoTrash />
                  </button>
                </li>
              );
            }
          })}

          {tasks.length === 0 && (
            <>
              <VoidList />
            </>
          )}
        </ul>
      </ListTask>
    </Container>
  );
};
