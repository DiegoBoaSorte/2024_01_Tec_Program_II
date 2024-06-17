import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoCadastroCliente from "./cliente/cadastro/tipoCadastroCliente"
import DeletarCliente from "./cliente/deletar/deletarCliente"
import TipoEditarClientes from "./cliente/editar/tipoEditarClientes"
import TipoListagemClientes from "./cliente/listagem/tipoListagemClientes"
import ListagemAcomodacoes from "./acomodacao/listagemAcomodacoes"
import ListagemHospedes from "./acomodacao/listagemHospedes"
import HosperdarCliente from "./acomodacao/alocarHospede"
import EncerrarHospedagem from "./acomodacao/encerrarHospedagem"
export default class Principal extends Processo {
    
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEditarClientes();
                this.processo.processar();
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new DeletarCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemHospedes()
                this.processo.processar()
                break
            case 6:
                this.processo = new HosperdarCliente()
                this.processo.processar()
                break
            case 7:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 8:
                this.processo = new EncerrarHospedagem()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Ação inválida :(')
        }
    }
}