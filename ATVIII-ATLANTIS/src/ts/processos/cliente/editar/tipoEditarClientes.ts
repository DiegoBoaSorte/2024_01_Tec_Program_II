import Processo from "../../../abstracoes/processo";
import MenuTipoEditarClientes from "../../../menus/menuTipo/menuTipoEditarClientes";
import EditarClientes from "./editarClienteTitular";
import EditarClienteDependente from "./editarClienteDependente";

export default class TipoEditarClientes extends Processo {
  
  constructor() {
    super()
    this.menu = new MenuTipoEditarClientes()
  }

  processar(): void {
    this.menu.mostrar()
    this.opcao = this.entrada.receberNumero("Qual a opção desejada?")

    switch (this.opcao) {
      case 1:
        this.processo = new EditarClientes()
        this.processo.processar()
        break
      case 2:
        this.processo = new EditarClienteDependente()
        this.processo.processar()
        break
      case 0:
        this.execucao = false
        break
      default:
        console.log("Opção não entendida :(")
    }
  }
}