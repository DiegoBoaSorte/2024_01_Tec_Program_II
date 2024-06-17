import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"
import Telefone from "../../modelos/telefone"

export default class CadastroTel extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let ddd = this.entrada.receberTexto('DDD?')
        let numero = this.entrada.receberTexto('Número do telefone?')
        let telefone = new Telefone(ddd, numero)
        this.cliente.Telefones.push(telefone)
    }
}