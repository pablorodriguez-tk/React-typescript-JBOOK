import React from 'react';
import { useActions } from '../hooks/use-actions';

interface ButtonProps {
  type: 'up' | 'down' | 'delete';
  id: string;
}

const Button: React.FC<ButtonProps> = ({ type, id }) => {
  const { moveCell, deleteCell } = useActions();

  if (type === 'delete') {
    return (
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
      >
        <span className="icon">
          <i className="fas fa-times" />
        </span>
      </button>
    );
  }

  return (
    <button
      className="button is-primary is-small"
      onClick={() => moveCell(id, type)}
    >
      <span className="icon">
        <i className={`fas fa-arrow-${type}`} />
      </span>
    </button>
  );
};

export default Button;
