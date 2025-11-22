import React from 'react';

// Recebe onSwitchToManual para abrir o outro modal
const ModalDues = ({ isOpen, onClose, onSwitchToManual }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Gestão de Mensalidades</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-hover" id="dues-table">
                  <thead>
                    <tr>
                      <th>Membro</th>
                      <th>Jan</th> <th>Fev</th> <th>Mar</th> <th>Abr</th>
                      <th>Mai</th> <th>Jun</th> <th>Jul</th> <th>Ago</th>
                      <th>Set</th> <th>Out</th> <th>Nov</th> <th>Dez</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pedro Dourado Rocha</td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-paid">Pago</span></td>
                      <td><span className="status-pending">Pendente</span></td>
                      <td><span className="status-pending">Pendente</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Fechar</button>
              <button type="button" className="btn btn-primary" onClick={onSwitchToManual}>
                <i className="fas fa-plus-circle"></i> Inserir Mensalidade Manualmente
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalDues;