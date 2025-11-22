import React from 'react';

const ModalMovement = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Registrar Nova Movimentação</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form id="movement-form" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label className="form-label">Nome/Objeto da Movimentação</label>
                  <input type="text" className="form-control" placeholder="Ex: Compra de materiais" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Descrição</label>
                  <textarea className="form-control" rows="3" placeholder="Detalhes..."></textarea>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Tipo</label>
                    <div className="radio-group">
                      <input type="radio" className="btn-check" name="movement-type" id="entrada" defaultChecked />
                      <label className="btn btn-outline-secondary" htmlFor="entrada">Entrada</label>
                      <input type="radio" className="btn-check" name="movement-type" id="saida" />
                      <label className="btn btn-outline-secondary" htmlFor="saida">Saída</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Valor (R$)</label>
                    <input type="number" className="form-control" placeholder="0,00" step="0.01" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Documento Comprobatório</label>
                  <input type="file" className="form-control" accept=".pdf" required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              <button type="submit" form="movement-form" className="btn btn-primary">Enviar Movimentação</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalMovement;