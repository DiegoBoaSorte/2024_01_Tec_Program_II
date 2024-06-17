import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento";
import MenuEditarCliente from "../../../menus/menuEditar/menuEditarCliente";
import Cliente from "../../../modelos/cliente";
import EditarNome from "./editarNome";
import EditarNomeSocial from "./editarNomeSocial";
import EditarDataNascimento from "./editarDataDeNascimento";
import EditarDocumento from "../../documento/editarDocumento";
import EditarEndereco from "../../endereco/editarEndereco";
import EditarTelefone from "../../telefone/editarTelefone";
import CadastrarTelefone from "../../telefone/cadastroClienteTelefone";
import CadastrarDocumento from "../../documento/cadastrarDocumentosCliente";

export default class EditarClientes extends Processo {
  private clientes: Cliente[]
  constructor() {
    super()
    this.execucao = true
    this.menu = new MenuEditarCliente()
    this.clientes = Armazem.InstanciaUnica.Clientes
  }

  processar(): void {
    console.clear()
    let clienteCPF = this.entrada.receberTexto(
      "Digite o CPF do cliente titular que sera editado: "
    )

    this.clientes.forEach((cliente) => {
      cliente.Documentos.filter((clienteDoc) => {
        if (
          clienteDoc.Numero === clienteCPF &&
          clienteDoc.Tipo === TipoDocumento.CPF
        ) {
          while (this.execucao) {
            this.menu.mostrar()
            console.log(`Nome:'${cliente.Nome}'\n CPF:'${clienteDoc.Numero}'`)
            this.opcao = this.entrada.receberNumero(`Digite a opção desejada: `)
            switch (this.opcao) {
              case 1:
                this.processo = new EditarNome(cliente)
                this.processo.processar()
                break
              case 2:
                this.processo = new EditarNomeSocial(cliente)
                this.processo.processar()
                break
              case 3:
                this.processo = new EditarDataNascimento(cliente)
                this.processo.processar()
                break
              case 4:
                this.processo = new EditarTelefone(cliente);
                this.processo.processar()
                break
              case 5:
                this.processo = new EditarEndereco(cliente)
                this.processo.processar()
                break
              case 6:
                this.processo = new EditarDocumento(cliente)
                this.processo.processar()
                break
              case 0:
                this.execucao = false
                break

              default:
                console.log("Opção não entendida :( ");
            }
          }
        }
      });
    });
  }
}