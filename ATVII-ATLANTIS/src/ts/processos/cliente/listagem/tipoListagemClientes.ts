import Processo from "../../../abstracoes/processo"
import MenuTipoListagemClientes from "../../../menus/menuTipoListagemClientes"
import ListagemDepedentesPorTitularEspecifico from "./listagemDependentes"
import ListagemTitulares from "./listagemTitulares"
import ListagemTitularDoDependente from "./listagemTitularDoDependente"

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDepedentesPorTitularEspecifico()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListagemTitularDoDependente()
                this.processo.processar()
                break;
            case 0:
                this.execucao = false
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}