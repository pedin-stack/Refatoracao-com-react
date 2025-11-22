import React, { useState } from 'react';

const CreateEventModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [dateStr, setDateStr] = useState('');

  // Helper para converter data pt-BR
  const parseBrazilianDate = (s) => {
    if (!s) return null;
    s = s.trim();
    const sep = s.indexOf('/') !== -1 ? '/' : (s.indexOf('-') !== -1 ? '-' : null);
    if (!sep) return null;
    const parts = s.split(sep);
    
    // dd/mm/yyyy
    if (parts.length === 3 && parts[2].length === 4) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return null;
  };

  const handleCreate = () => {
    if (!title.trim()) {
      alert('Informe o nome do evento.');
      return;
    }
    
    // Tenta criar um objeto Date (aceita formato ISO yyyy-mm-dd ou tenta o parser BR)
    let dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) {
        dateObj = parseBrazilianDate(dateStr);
    }

    if (!dateObj || isNaN(dateObj.valueOf())) {
      alert('Data inválida. Use dd/mm/aaaa ou aaaa-mm-dd.');
      return;
    }

    // Envia para o componente pai salvar
    onSave(title, dateObj);
    
    // Limpa e fecha
    setTitle('');
    setDateStr('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ display: 'flex' }}> {/* Flex para centralizar */}
      <div className="modal-content" style={{ maxWidth: '420px' }}>
        <div className="modal-header">
            <h2>Criar Novo Evento</h2>
            <button className="close-modal-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()} className="modal-form">
                <div className="form-group">
                    <label htmlFor="evt-title">Nome do evento</label>
                    <input 
                        id="evt-title" 
                        type="text" 
                        placeholder="Nome do evento"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="evt-date">Data (dd/mm/aaaa)</label>
                    <input 
                        id="evt-date" 
                        type="text" 
                        placeholder="ex: 09/10/2025"
                        value={dateStr}
                        onChange={(e) => setDateStr(e.target.value)}
                    />
                </div>
                <div className="actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '15px' }}>
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={handleCreate}>Criar</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;