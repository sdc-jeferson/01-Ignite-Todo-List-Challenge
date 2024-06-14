import { Container } from "./input";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface InputWrapperProps {
  nameTask: string;
  setNameTask: (nameTask: string) => void;
  createTask: () => void;
}

export const InputWrapper = ({
  nameTask,
  setNameTask,
  createTask,
}: InputWrapperProps) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={nameTask}
        onChange={(e) => setNameTask(e.target.value)}
      />
      <button onClick={createTask}>
        Criar <AiOutlinePlusCircle />
      </button>
    </Container>
  );
};
