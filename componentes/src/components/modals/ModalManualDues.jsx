import React from 'react';

const ModalManualDues = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-manual-dues">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Inserir Pagamento Manual</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form id="manual-dues-form" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label className="form-label">Membro</label>
                  <select className="form-select">
                    <option>Selecione um membro...</option>
                    <option value="1">Carlos</option>
                    <option value="2">Cleiton</option>
                    <option value="3">Junin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Mês de Referência</label>
                  <select className="form-select" defaultValue="11">
                    <option value="1">Janeiro</option>
                    <option value="2">Fevereiro</option>
                    <option value="3">Março</option>
                    <option value="4">Abril</option>
                    <option value="5">Maio</option>
                    <option value="6">Junho</option>
                    <option value="7">Julho</option>
                    <option value="8">Agosto</option>
                    <option value="9">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                  </select>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Valor Pago (R$)</label>
                    <input type="number" className="form-control" placeholder="30,00" step="0.01" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Data do Pagamento</label>
                    <input type="date" className="form-control" required />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              <button type="submit" form="manual-dues-form" className="btn btn-primary">Registrar Pagamento</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalManualDues;