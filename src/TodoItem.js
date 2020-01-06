import React from 'react';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through'
  };

  return (
    <div>
      <label>
        <input
          type='checkbox'
          key={props.item.id}
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <span style={props.item.completed ? completedStyle : null}>
          {props.item.text}
        </span>
      </label>
      <hr />
    </div>
  );
}

export default TodoItem;
