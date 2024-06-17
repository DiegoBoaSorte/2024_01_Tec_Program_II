import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import ImpressorDependente from "../../../impressores/ImpressorDependente";
import Impressor from "../../../interfaces/impressor";
import Cliente from "../../../modelos/cliente";


export default class ListagemDepedentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
      super()
      this.execucao = false
      this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
      console.clear();
        let titular = this.entrada.receberTexto(`Digite o CPF do cliente titular: `)
        console.log("Iniciando a listagem de clientes dependentes para um titular específico...")
        this.clientes.map((cliente) => {
          cliente.Documentos.filter((doc) => {
            if (doc.Numero === titular) {
              cliente.Dependentes.forEach((dependentes) => {
                this.impressor = new ImpressorDependente(dependentes)
                console.log(this.impressor.imprimir())
                this.execucao = true
              })
            }
          })
        })
      }
}
