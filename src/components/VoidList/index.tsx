import { ContainerVoidList } from "./void-list";
import { VoidListTask } from "./void-list";
import voidImg from "../../assets/voidlist.png";

export const VoidList = () => {
  return (
    <ContainerVoidList>
      <VoidListTask>
        <img src={voidImg} alt="ilustração lista vazia" />
        <p className="firts-p">Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </VoidListTask>
    </ContainerVoidList>
  );
};
