import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";

export default class ListagemAlocados extends Processo{

    private cliente: Cliente[]

    constructor() {
      super()
      this.cliente = Armazem.InstanciaUnica.Clientes
      this.execucao = true
    }

    processar(): void {
        console.clear()
        console.log("Listagem dos clientes hospedados...")
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
                console.log("Não existe nenhum cliente hospedado no momento" )
                this.execucao = false
            }else {
                console.log("HOSPEDES: :")
                this.cliente.forEach((cliente) => {
                    if (cliente.Acomodacao !== undefined) {
                        cliente.Documentos.filter((doc) => {
                            if (doc.Tipo === TipoDocumento.CPF) {
                                if (cliente.Acomodacao !== undefined) {
                                    console.log(`Nome: ${cliente.Nome}, CPF: ${doc.Numero}, Acomodação: ${cliente.Acomodacao.NomeAcomadacao} `)                               
                                }
                            }
                            })
                    }
                })
                this.execucao = false
            }
        }
    }
}