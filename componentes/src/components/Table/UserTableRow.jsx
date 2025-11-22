import React from 'react';

const UserTableRow = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td className="actions-cell">
        <button 
          className="btn edit" 
          onClick={() => onEdit(user)}
        >
          Editar
        </button>
        <button 
          className="btn danger" 
          onClick={() => onDelete(user.id)}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;