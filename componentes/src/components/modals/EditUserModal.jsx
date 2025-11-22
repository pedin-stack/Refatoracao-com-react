import React, { useState, useEffect } from 'react';

const EditUserModal = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  // Atualiza o formulário quando o usuário selecionado muda
  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email, role: user.role });
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Mapeando id do input para chave do estado (remove prefixo 'edit-user-')
    const key = id.replace('edit-user-', '');
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados salvos:', formData);
    onClose(); // Fecha o modal após salvar
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" id="edit-user-modal">
      <div className="modal-content small-modal">
        <header className="modal-header">
          <h2>Editar Usuário</h2>
          <button className="close-modal-btn" onClick={onClose}>&times;</button>
        </header>
        <form id="edit-user-form" className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="edit-user-name">Nome</label>
            <input 
                type="text" 
                id="edit-user-name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-user-email">Email</label>
            <input 
                type="email" 
                id="edit-user-email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-user-role">Função</label>
            <input 
                type="text" 
                id="edit-user-role" 
                value={formData.role} 
                onChange={handleChange} 
                required 
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
            <button type="submit" className="submit-btn confirm">Confirmar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;