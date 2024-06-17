import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import ImpressorDependente from "../../../impressores/ImpressorDependente";
import ImpressaorCliente from "../../../impressores/impressorCliente";
import Impressor from "../../../interfaces/impressor";
import Cliente from "../../../modelos/cliente";

export default class ListagemTitularDependente extends Processo {
  private clientes: Cliente[];
  private impressor!: Impressor;
  constructor() {
    super();
    this.execucao = false;
    this.clientes = Armazem.InstanciaUnica.Clientes
  }
  processar(): void {
    console.clear();
    let cpfDependente = this.entrada.receberTexto(`Digite o CPF do dependente: `)
    console.log("Iniciando a listagem do titular para o cliente dependente específico...")
    this.clientes.map((cliente) => {
        cliente.Dependentes.forEach((dependente) => {
            dependente.Documentos.filter((doc) => {
                if (doc.Numero === cpfDependente) {
                    this.impressor = new ImpressaorCliente(cliente)
                    console.log(this.impressor.imprimir())
                    this.execucao = true
                }
            })
        })
    })
    
  }
}
