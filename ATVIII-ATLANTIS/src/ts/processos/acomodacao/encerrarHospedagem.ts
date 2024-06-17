import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";

export default class DesalocarCliente extends Processo{

    private cliente: Cliente[]

    constructor() {
      super()
      this.cliente = Armazem.InstanciaUnica.Clientes
      this.execucao = true
    }

    processar(): void {
        console.clear()
        console.log("Encerrar hospedagem de um cliente...")
        while (this.execucao) {
            var trueFalse = false
            this.cliente.forEach((cliente) => {
                if (cliente.Acomodacao !== undefined) {
                    cliente.Documentos.filter((doc) => {
                        if (TipoDocumento.CPF === doc.Tipo) {
                            if (cliente.Acomodacao !== undefined) {
                                trueFalse = true
                            }
                        }
                    })
                }
            })
            if (!trueFalse) {
                console.log("Não há clientes alocados :(" );
                this.execucao = false;
            }else if (trueFalse){
                console.log("HOSPEDES: ")
                this.cliente.forEach((cliente) => {
                    if (cliente.Acomodacao !== undefined) {
                        cliente.Documentos.filter((doc) => {
                            if (TipoDocumento.CPF === doc.Tipo) {
                                if (cliente.Acomodacao !== undefined) {
                                    console.log(`Nome: ${cliente.Nome}, CPF: ${doc.Numero}, Acomodação: ${cliente.Acomodacao.NomeAcomadacao} `)                           
                                }
                            }
                            })
                    }
                })
                let clienteCpf = this.entrada.receberTexto("Digite o CPF do cliente que deseja encerrar hospedagem: ");
                this.cliente.forEach((cliente) => {
                    cliente.Documentos.filter((doc) => {
                        if (doc.Numero === clienteCpf) {
                            cliente.Acomodacao = undefined
                            console.log('Encerrando hospedagem do cliente...')
                        } else {
                            console.log("CPF não encontrado");
                        }
                    })
                })
                this.execucao = false;
            }
        }
    }
}