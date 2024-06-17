import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"

export default class EditarNumero extends Processo {
  private cliente: Cliente

  constructor(cliente: Cliente) {
    super()
    this.cliente = cliente
  }

  processar() {
    console.clear()
    console.log(`Listagem Telefones:`)
    this.cliente.Telefones.forEach((i) => {
        console.log(`|  Telefone: ${i.Ddd} - ${i.Numero} `)
    });

    let tel = this.entrada.receberTexto("Digite o número de telefone a ser editado (XX XXXXXXXXXX): ")
    let partes = tel.split(" ")
    this.cliente.Telefones.filter(
      (tel) => tel.Numero == partes[1] && tel.Ddd === partes[0]
    ).forEach((novoTel) => {
      let telNovo = this.entrada.receberTexto(`Digite o novo numero (XX XXXXXXXXX): `)
      let partes = telNovo.split(" ")
      novoTel.Ddd = new String(partes[0].valueOf()).valueOf()
      novoTel.Numero = new String(partes[1].valueOf()).valueOf()
    });
  }
}
