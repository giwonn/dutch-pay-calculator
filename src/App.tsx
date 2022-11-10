import { useCallback, useState } from 'react';
import './App.css';
import Input from '@/components/atoms/Input';
import Chip from '@/components/atoms/Chip';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ChipList from '@/components/ChipList';

function App() {
  const [ data, setData ] = useState([
    { id: '1', name: 'a' },
    { id: '2', name: 'b' },
    { id: '3', name: 'c' },
    { id: '4', name: 'd' },
  ]);

  const onDragEnd = useCallback((result: any) => {
    if (!result.destination) return;
    console.log(result);
    const items = [ ...data ];
    console.log(items);
    const [ reorderedItem ] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setData(items);
  }, []);


  return (
    <div className="App">
      <Input />
      <DragDropContext onDragEnd={ onDragEnd }>
        <Droppable droppableId="chipList">
          { (provided) => (
            <div { ...provided.droppableProps } ref={ provided.innerRef }>
              { data.map((item, index) => (
                <Chip text={ item.name } id={ item.id } index={ index } key={ index } />)) }
              { provided.placeholder }
            </div>
          ) }
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
