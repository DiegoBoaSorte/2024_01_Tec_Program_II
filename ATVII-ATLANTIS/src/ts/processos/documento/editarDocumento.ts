import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"

export default class EditarDocumento extends Processo {
  private cliente: Cliente
  constructor(cliente: Cliente) {
    super()
    this.cliente = cliente
    this.execucao = true
  }

  processar() {
    console.clear()
    console.log(`Documentos:`)

    this.cliente.Documentos.forEach((i) => {
      console.log(`------------------------------`)
      console.log(`|  Tipo: ${i.Tipo}`)
      console.log(`|  Número: ${i.Numero}`)
      console.log(`|  Data de expedicao: ${i.DataExpedicao.toLocaleDateString()}`)
      
    })

    let documento = this.entrada.receberTexto("Digite o número do documento que se deseja editar: ")

    this.cliente.Documentos.filter((doc) => doc.Numero == documento).forEach(
      (novoDoc) => {
        let novoDocNumero = this.entrada.receberTexto("Novo número: ")
        let novaDataDoc = this.entrada.receberData("Nova data de expedição: ")
        novoDoc.Numero = novoDocNumero
        novoDoc.DataExpedicao = novaDataDoc
      }
    )
  }
}
