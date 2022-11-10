import Chip from '@/components/atoms/Chip';
import { Droppable } from 'react-beautiful-dnd';

const ChipList = () => {
  return (
    <Droppable droppableId="chipList">
      { (provided) => (
        <div { ...provided.droppableProps } ref={ provided.innerRef }>
          <Chip text="inputName1" id="1" />
          <Chip text="inputName2" id="2" />
          <Chip text="inputName3" id="3" />
          <Chip text="inputName4" id="4" />
        </div>
      ) }
    </Droppable>
  );
};

export default ChipList;