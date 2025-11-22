import React from 'react';
import UserTableRow from './UserTableRow';

const UserTable = ({ users, onEditUser }) => {
  const handleDelete = (id) => {
    if(window.confirm('Tem certeza que deseja excluir este usuário?')) {
        console.log(`Deletar usuário ${id}`);
        // Lógica de delete aqui
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Lista de Usuários</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th></th> {/* Coluna de Ações */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTableRow 
                key={user.id} 
                user={user} 
                onEdit={onEditUser} 
                onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;