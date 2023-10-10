import React from 'react';
import './Box1.css';

export const Box1 = ({ title, data }) => {
  return (
    <div className="box1">
      <h2>{title}</h2>
      {data.length > 0 ? (
        <ul className="task-list">
          {data.map((item) => (
            <li key={item._id}>
              <h3>{item.name}</h3>
              {item.description && <p>{item.description}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks with this status.</p>
      )}
    </div>
  );
};