import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento";
import Cliente from "../../../modelos/cliente";

export default class DeletarCliente extends Processo {

  private cliente: Cliente[]
  
  constructor() {
    super()
    this.cliente = Armazem.InstanciaUnica.Clientes
    this.execucao = true
  }

  processar(): void {
    while (this.execucao) {
      if (this.cliente.length == 0) {
        console.log("Não há clientes para poder deleta-los." )
        this.execucao = false
      } else {
        this.cliente.forEach((cliente) => {
          cliente.Documentos.filter((doc) => {
            if (TipoDocumento.CPF === doc.Tipo) {
              console.log(`Nome: ${cliente.Nome}\n cpf: ${doc.Numero} `)
            }
          })
        })
        this.cliente.forEach((cliente) => {
          cliente.Documentos.forEach((doc) => {
            let cpf = this.entrada.receberTexto("Digite o CPF do cliente que deseja excluir: ")
            if (TipoDocumento.CPF === doc.Tipo && cpf === doc.Numero ) {
              let index = this.cliente.indexOf(cliente);
              this.cliente.splice(index, 1)
              console.log("Cliente excluido")
              this.execucao = false
            } else {
              console.log("Ação inválida")
              this.execucao = false
            }
          })
        })
      }
    }
  }
}