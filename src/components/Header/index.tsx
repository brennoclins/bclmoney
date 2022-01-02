import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNelTransactionModal: () => void;
}

export function Header({ onOpenNelTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="BCL money" />
        <button type="button" onClick={onOpenNelTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}