import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";

export default class AlocarCliente extends Processo{

    private cliente: Cliente[]
    private acomodacoes: Acomodacao[]

    constructor() {
      super()
      this.cliente = Armazem.InstanciaUnica.Clientes
      this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
      this.execucao = true
    }

    processar(): void {
        console.clear();
        console.log("Hospedar um cliente...")
        while (this.execucao) {
            console.log("Clientes:");
            this.cliente.forEach((cliente) => {
                cliente.Documentos.filter((doc) => {
                    if (TipoDocumento.CPF === doc.Tipo) {
                        console.log(`Nome: ${cliente.Nome}, CPF: ${doc.Numero} `);
                    }
                })
            })

            let clienteCPF = this.entrada.receberTexto("Digite o CPF do cliente: ");
            this.cliente.forEach((cliente) => {
                cliente.Documentos.filter((doc) => {
                    if (clienteCPF === doc.Numero) {
                        console.log(`Digite o número da acomodação que deseja hospeda-lo: `)
                        console.log(`| 1 - Acomodação simples para casal`)
                        console.log(`| 2 - Acomodação para família com até cinco crianças`)
                        console.log(`| 3 - Acomodação para família com até duas crianças`)
                        console.log(`| 4 - Acomodação para até duas familias, casal e três crianças cada`)
                        console.log(`| 5 - Acomodação com garagem para solteiro(a)`)
                        console.log(`| 6 - Acomodação simples para solteiro(a)`)
                        console.log(`| 0 - Sair`)
                        console.log(`----------------------`);
                        this.opcao = this.entrada.receberNumero("Opção:");
                        switch (this.opcao) {
                        case 1:
                            cliente.Acomodacao = this.acomodacoes[0]
                            break;
                        case 2:
                            cliente.Acomodacao = this.acomodacoes[1]
                            break;
                        case 3:
                            cliente.Acomodacao = this.acomodacoes[2]
                            break;
                        case 4:
                            cliente.Acomodacao = this.acomodacoes[3]
                            break;
                        case 5:
                            cliente.Acomodacao = this.acomodacoes[4]
                            break;
                        case 6:
                            cliente.Acomodacao = this.acomodacoes[5]
                            break;
                        }
                        console.log('Finalizando alocação de cliente...')
                    }
                })
                this.execucao = false;
            })   
        }
    }
}
