import React from 'react';

const ModalGenerateReport = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Gerar Relatório Financeiro</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form id="reports-form" onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Data de Início</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Data de Término</label>
                    <input type="date" className="form-control" required />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              <button type="submit" form="reports-form" className="btn btn-primary">Gerar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalGenerateReport;