import React from 'react';

const EventDetailsModal = ({ isOpen, onClose, event, onDelete }) => {
  if (!isOpen || !event) return null;

  const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja cancelar o evento "${event.title}"?`)) {
      onDelete(event.id); // Passa o ID para o pai excluir
      onClose();
    }
  };

  return (
    <div className="modal-overlay" style={{ display: 'flex' }}>
      <div className="modal-content" style={{ maxWidth: '420px' }}>
        <header className="modal-header">
            <h2>{event.title}</h2>
            <button className="close-modal-btn" onClick={onClose}>&times;</button>
        </header>
        
        <div className="modal-body">
            <h3 style={{ fontSize: '1rem', color: '#aaa', marginBottom: '10px' }}>Membros Confirmados:</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '20px' }}>
                {/* Lista estática conforme pedido, mas poderia ser dinâmica via props */}
                <li style={{ background: '#121212', padding: '8px', borderRadius: '6px', marginBottom: '5px' }}>Carlos Almeida</li>
                <li style={{ background: '#121212', padding: '8px', borderRadius: '6px', marginBottom: '5px' }}>João da Silva</li>
                <li style={{ background: '#121212', padding: '8px', borderRadius: '6px', marginBottom: '5px' }}>Pedro Dourado</li>
                <li style={{ background: '#121212', padding: '8px', borderRadius: '6px', marginBottom: '5px' }}>Marcos Rocha</li>
            </ul>
        </div>

        <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn btn-secondary" onClick={onClose}>Voltar</button>
            <button className="btn btn-danger" onClick={handleDelete} style={{ backgroundColor: '#dc3545', color: '#fff' }}>
                Cancelar Evento
            </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;