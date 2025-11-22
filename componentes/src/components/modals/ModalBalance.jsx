import React from 'react';

const ModalBalance = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Balanço Simples de Movimentações</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Data</th>
                      <th scope="col">Nome/Objeto</th>
                      <th scope="col">Tipo</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Documento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Exemplo estático*/}
                    {/* Entre as tr colocar um laço de repetição que puxa do bd os dados formando a table */}
                    <tr>
                      <td>01/10/2025</td>
                      <td>Compra de materiais para filantropia</td>
                      <td><span className="badge text-bg-danger">Saída</span></td>
                      <td>R$ 150,00</td>
                      <td><a href="#" className="btn btn-sm btn-outline-secondary">Ver PDF</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <nav aria-label="Navegação do balanço">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled"><button className="page-link">Anterior</button></li>
                  <li className="page-item active"><button className="page-link">1</button></li>
                  <li className="page-item"><button className="page-link">2</button></li>
                  <li className="page-item"><button className="page-link">Próxima</button></li>
                </ul>
              </nav>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalBalance;