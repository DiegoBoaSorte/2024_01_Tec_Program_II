import Processo from "../../../abstracoes/processo"
import Armazem from "../../../dominio/armazem"
import Cliente from "../../../modelos/cliente"
import Endereco from "../../../modelos/endereco"
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento"
import CadastrarDocumentosCliente from "./../../documento/cadastrarDocumentosCliente"
import CadastroClienteTelefone from "./../../telefone/cadastroClienteTelefone"

export default class CadastroClienteDependente extends Processo {
  private clientes: Cliente[]
  constructor() {
    super()
    this.clientes = Armazem.InstanciaUnica.Clientes
    this.execucao = true
  }
  processar(): void {
    console.log("Iniciando o cadastro de um novo dependete...")
    let cpfCliente = this.entrada.receberTexto(`Digite o CPF do cliente titular: `)
    this.clientes.forEach((cliente) =>
      cliente.Documentos.filter((clienteCpf) => {
        if (
          clienteCpf.Numero === cpfCliente &&
          clienteCpf.Tipo === TipoDocumento.CPF
        ) {
          while (this.execucao) {
            let nome = this.entrada.receberTexto('Nome do dependente: ')
            let nomeSocial = this.entrada.receberTexto('Nome social: ')
            let dataDeNascimento = this.entrada.receberData('Data de nascimento dd/MM/aaaa: ')
            let dependente = new Cliente(nome, nomeSocial, dataDeNascimento)

            this.processo = new CadastroClienteTelefone(dependente)
            this.processo.processar()

            cliente.Dependentes.push(dependente)

            dependente.Endereco = cliente.Endereco.clonar() as Endereco
            this.processo = new CadastrarDocumentosCliente(dependente)
            this.processo.processar()
            this.execucao = false

            console.log('Finalizando o cadastro do dependente...')
          }
        }
      })
    );
  }
}
