import Menu from "../../interfaces/menu";

export default class MenuEditarCliente implements Menu {
  mostrar(): void {
    console.clear();
    console.log(`****************************`);
    console.log(`| Editar: `)
    console.log(`----------------------`);
    console.log(`| 1 - Nome`);
    console.log(`| 2 - Nome social`);
    console.log(`| 3 - Data de nascimento`);
    console.log(`| 4 - Telefones`);
    console.log(`| 5 - Endereço`);
    console.log(`| 6 - Documentos`);
    console.log(`----------------------`);
    console.log(`| 0 - Sair`)
    console.log(`----------------------`);
  }
}