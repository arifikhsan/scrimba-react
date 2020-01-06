import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          key={props.item.id}
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        {props.item.text}
      </label>
      <hr />
    </div>
  );
}

export default TodoItem;
