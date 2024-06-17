import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento";
import MenuEditarDependente from "../../../menus/menuEditarDependente";
import Cliente from "../../../modelos/cliente";
import EditarDocumento from "./../../documento/editarDocumento";
import EditarNome from "./editarNome";
import EditarNomeSocial from "./editarNomeSocial";
import EditarDataNascimento from "./editarDataDeNascimento";



export default class EditarDependente extends Processo {
  private clientes: Cliente[]
  constructor() {
    super()
    this.execucao = true
    this.menu = new MenuEditarDependente();
    this.clientes = Armazem.InstanciaUnica.Clientes
  }
  processar(): void {
    console.clear()
    let titular = this.entrada.receberTexto(
        "Digite o CPF do cliente titular desse dependente que sera editado: "
    )
    console.log("DEPENDENTES");
    this.clientes.map((cliente) => {
      cliente.Documentos.filter((doc) => {
        if (doc.Numero === titular && doc.Tipo === TipoDocumento.CPF) {
          cliente.Dependentes.forEach((dependente) => {
            dependente.Documentos.forEach(
              (doc) => {
                console.log(`Nome: ${dependente.Nome}, CPF: ${doc.Numero}`)
              }
            )
            dependente.Documentos.filter((dependenteCpf) => {
              let entradaDoCpf = this.entrada.receberTexto(
                "Digite o CPF do cliente dependente: "
              )
              if (
                dependenteCpf.Numero === entradaDoCpf &&
                dependenteCpf.Tipo === TipoDocumento.CPF
              ) {
                while (this.execucao) {
                  this.menu.mostrar();
                  console.log(
                    `Cliente dependente nome:'${dependente.Nome}'\nCliente dependente CPF:'${dependenteCpf.Numero}'`
                  )
                  this.opcao = this.entrada.receberNumero(
                    `Digite a opção desejada: `
                  )
                  switch (this.opcao) {
                    case 1:
                      this.processo = new EditarNome(dependente);
                      this.processo.processar();
                      break
                    case 2:
                      this.processo = new EditarNomeSocial(dependente);
                      this.processo.processar();
                      break
                    case 3:
                      this.processo = new EditarDataNascimento(dependente)
                      this.processo.processar();
                      break
                    case 4:
                      this.processo = new EditarDocumento(dependente);
                      this.processo.processar();
                      break;
                    case 0:
                      this.execucao = false;
                      console.log("Até logo!");
                      console.clear();
                      break;
                    default:
                      console.log("Opção não entendida :(");
                  }
                }
              }
            });
          });
        }
      });
    });
  }
}