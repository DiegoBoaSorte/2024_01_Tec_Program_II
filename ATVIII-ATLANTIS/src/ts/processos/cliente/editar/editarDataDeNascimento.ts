import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";

export default class EditarNascimento extends Processo {
  private cliente: Cliente

  constructor(cliente: Cliente) {
    super()
    this.cliente = cliente
  }

  processar() {
    let NovaDataNascimento = this.entrada.receberData("Nova data de nascimento dd/MM/aaaa: ");
    this.cliente.DataNascimento = NovaDataNascimento;
  }
}
