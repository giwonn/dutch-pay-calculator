import React, { memo, useCallback, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export interface Item {
  id: number;
  text: string;
}

const Chip = ({ id, text, index }: { id: string; text: string; index: number }) => {
  return (
    <Draggable draggableId={ id } index={ index }>
      { (provided) => (
        <div
          style={ { outline: '1px solid black' } }
          { ...provided.draggableProps }
          { ...provided.dragHandleProps }
          ref={ provided.innerRef }
        >
          {/*<span>{ text }</span>*/ }
          {/*<button>x</button>*/ }
          { text }
        </div>
      ) }
    </Draggable>
  );
};

export default Chip;
