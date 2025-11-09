import { QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL } from "../constants";
import Parcelamento from "./Parcelamento";

class CalcularParcelamento {
  executar(
    valor: number,
    qtdeParcelas: number = QTDE_MAX_PARCELAS,
    taxaJuros: number = TAXA_JUROS_MENSAL
  ): Parcelamento {
    if (qtdeParcelas < 2 || qtdeParcelas > QTDE_MAX_PARCELAS) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${QTDE_MAX_PARCELAS}.`
      );
    }
    const valorComJuros = this.calcularJurosCompostos(
      valor,
      taxaJuros,
      qtdeParcelas
    );
    return {
      valorTotal: parseFloat(valorComJuros.toFixed(2)),
      valorParcela: parseFloat((valorComJuros / qtdeParcelas).toFixed(2)),
      qtdeParcelas,
      taxaJuros,
    };
  }

  private calcularJurosCompostos(
    valorTotal: number,
    taxaMensal: number,
    qtdeParcelas: number
  ): number {
    return valorTotal * Math.pow(1 + taxaMensal, qtdeParcelas);
  }
}

export default CalcularParcelamento;
