
import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

// para acessibilidade
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionMotalOpen, setIsNewTransactionMotalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionMotalOpen(true);
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionMotalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNelTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal isOpen={isNewTransactionMotalOpen} onRequestClose={handleCloseNewTransactionsModal}>
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}