import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
             
          <tr>
            <td>Aluguel</td>
            <td className="withdrawal">- R$2.000,00</td>
            <td>Casa</td>
            <td>30/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}